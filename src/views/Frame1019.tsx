import Menutab from "@/components/Menutab";
import Insertbutton from "@/components/Insertbutton";
import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import "@/styles/Frame1019.css";
import { fetchRoutineData, saveRoutineData } from "@/api/jsonbin";
import { useEffect } from "react";
import Frame6528 from "@/views/Frame6528";
import Frame63372 from "@/views/Frame63372";
import Frame63357 from "@/views/Frame63357";

const getKSTDateString = () => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const kst = new Date(utc + (9 * 3600000)); // UTC + 9시간
    return kst.toISOString().split('T')[0]; 
};

const Frame1019 = () => {
    const [menuState, setMenuState] = useState("checklist");
    const [routineList, setRoutineList] = useState<any[]>([]);
    const [historyData, setHistoryData] = useState<any>({});
    const [reminderInput, setReminderInput] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const [selectedTrackerRoutine, setSelectedTrackerRoutine] = useState<string | null>(null);
    const [holidays, setHolidays] = useState<Set<string>>(new Set());
    const [filteredRoutines, setFilteredRoutines] = useState<any[]>([]); 
    const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false); 
    const [isNoResultPopupOpen, setIsSearchNoResultPopupOpen] = useState(false);
    const [priorityInput, setPriorityInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [repeatInput, setRepeatInput] = useState("");

    const handleCheckToggle = async (index: number) => {
        // 1. 내가 클릭한 루틴의 체크 상태를 반대로 뒤집습니다 (true <-> false)
        const newRoutines = [...routineList];
        newRoutines[index].checked = !newRoutines[index].checked;
        setRoutineList(newRoutines); // 뷰 즉시 갱신

        // 2. 오늘 날짜(KST)를 구해서, 달력(History) 가방에도 오늘 기록을 실시간으로 덮어씌웁니다.
        const todayStr = getKSTDateString();
        const newHistory = { ...historyData };
        
        // 오늘 날짜의 기록을 업데이트합니다.
        newHistory[todayStr] = newRoutines.map(r => ({
            description: r.description,
            checked: r.checked
        }));
        
        // 🌟 이 코드가 실행되는 순간, 부모의 통계 엔진이 돌면서 달력 도트와 %가 즉각 변합니다!
        setHistoryData(newHistory);

        // 3. 브라우저가 꺼져도 날아가지 않게 JSONBin 서버 금고에 즉시 백업합니다.
        await saveRoutineData({
            lastDate: todayStr,
            routines: newRoutines,
            history: newHistory,
            daily_planner: reminderInput // 메모장 텍스트도 함께 보존
        });
    };
    
    // 🌟 [안전하게 결합된 useEffect] 공휴일 로드 + JSONBin 데이터 로드 완벽 유지!
    useEffect(() => {
        // 1번 일꾼: 구글에서 공휴일 가져오기
        const loadDataAndHolidays = async () => {
            let holidaySet = new Set<string>();
            try {
                const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
                if (API_KEY) {
                    const calendarId = "ko.south_korea#holiday@group.v.calendar.google.com";
                    const currentYear = new Date().getFullYear();
                    const timeMin = new Date(`${currentYear}-01-01T00:00:00Z`).toISOString();
                    const timeMax = new Date(`${currentYear}-12-31T23:59:59Z`).toISOString();
                    
                    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true`;
                    
                    const response = await fetch(url);
                    const data = await response.json();
                    
                    if (data.items) {
                        data.items.forEach((item: any) => {
                            if (item.start && item.start.date) {
                                holidaySet.add(item.start.date);
                            }
                        });
                        setHolidays(holidaySet); // 공휴일 가방 세팅 완료!
                    }
                }
            } catch (error) {
                console.error("구글 공휴일 데이터를 가져오지 못했습니다:", error);
            }

            // 2번 일꾼: 기존 유저님의 JSONBin 및 데일리 플래너 로직 (100% 원본 유지)
            setIsLoading(true);
            const data = await fetchRoutineData(); 

            if (data) {
                const todayKST = getKSTDateString();
                
                let savedRoutines = data.routines || [];
                let savedHistory = data.history || {};
                let savedPlanner = data.daily_planner || ""; 
                const lastDate = data.lastDate || todayKST;

                if (lastDate !== todayKST) {
                    const dailyRecord = savedRoutines.map((r: any) => ({
                        description: r.description,
                        checked: r.checked
                    }));
                    
                    if (dailyRecord.length > 0) {
                        savedHistory[lastDate] = dailyRecord; 
                    }
                    savedRoutines = savedRoutines.map((r: any) => ({ ...r, checked: false }));
                    
                    await saveRoutineData({
                        lastDate: todayKST,
                        routines: savedRoutines,
                        history: savedHistory,
                        daily_planner: savedPlanner 
                    });
                }

                setRoutineList(savedRoutines);
                setHistoryData(savedHistory);
                setReminderInput(savedPlanner); 
            }
            setIsLoading(false);
        };

        // 두 가지 일을 순서대로 안전하게 실행합니다.
        loadDataAndHolidays();
    }, []);
    
    const toggleRoutineCheck = async (id: string) => {
        const updatedList = routineList.map((routine) => 
            routine.id === id ? { ...routine, checked: !routine.checked } : routine
        );
        
        setRoutineList(updatedList); // 화면 즉시 변경 (틱! 하고 체크됨)
        
        // JSONBin에 변경된 상태를 통째로 덮어쓰기 (새로고침해도 체크 상태 유지!)
        await saveRoutineData({
            lastDate: getKSTDateString(),
            routines: updatedList,
            history: historyData, // 기존 히스토리 유지
            daily_planner: reminderInput // 데일리 플래너 데이터 유지
        });
    };

    // 🌟 마법 1 (우클릭): 화면에서만 숨기기 (서버에는 hidden 기록을 남겨 이력 유지)
    const hideRoutine = async (id: string) => {
        const updatedList = routineList.map((routine) =>
            routine.id === id ? { ...routine, hidden: true } : routine
        );
        setRoutineList(updatedList); // 화면 즉시 반영

        await saveRoutineData({
            lastDate: getKSTDateString(),
            routines: updatedList,
            history: historyData,
            daily_planner: reminderInput
        });
    };

    // 🌟 마법 2 (좌 더블클릭): 완전 삭제 (서버에서도 영구적으로 날림)
    const deleteRoutinePermanently = async (id: string) => {
        const updatedList = routineList.filter((routine) => routine.id !== id);
        setRoutineList(updatedList);

        await saveRoutineData({
            lastDate: getKSTDateString(),
            routines: updatedList,
            history: historyData,
            daily_planner: reminderInput
        });
    };
    const [isChecklistPopupOpen, setIsChecklistPopupOpen] = useState(false);
    const [priInput, setPriInput] = useState("");
    const [descrbInput, setDescrbInput] = useState("");
    const [repInput, setRepInput] = useState("");
    const today = new Date();
    const currentDate = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;
    // 🌟 [추가] 트래커 달성률 및 달력 도트 색칠 데이터 계산 로직
    // 🌟 [안전하게 결합된 통계 엔진] 기존 계산 흐름 유지 + 주말/공휴일 자동 unlisted 낙인 및 면제 처리!
    const currentYear = today.getFullYear();
    let yearlyChecked = 0;
    let yearlyUnchecked = 0;
    const yearlyStatusMap: { [date: string]: string } = {};

    if (selectedTrackerRoutine && historyData) {
        Object.keys(historyData).forEach((dateStr) => {
            if (dateStr.startsWith(String(currentYear))) {
                
                // 🗓️ 1. 날짜 객체를 생성해 오늘이 주말인지, 구글 공휴일 가방에 있는지 판별
                const dateObj = new Date(dateStr);
                const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6; // 0: 일요일, 6: 토요일
                const isGoogleHoliday = holidays.has(dateStr); // 우리가 구글 API로 받아온 공휴일 바구니
                const isRedDay = isWeekend || isGoogleHoliday; // 둘 중 하나라도 맞으면 빨간 날(휴일)!

                if (isRedDay) {
                    // 🌟 [유저님 최종 요청 사항] 
                    // 주말이나 공휴일에는 checklist 기록(상태)과 전혀 상관없이 무조건 unlisted(휴일 면제) 상태로 낙인 찍습니다!
                    // Checked나 Unchecked 통계 변수를 건드리지 않으므로 연간 달성률 분모에서 완벽히 면제됩니다.
                    yearlyStatusMap[dateStr] = 'unlisted'; 
                } else {
                    // 2. 평일일 때만 기존 유저님의 소중한 루틴 추적 로직이 그대로 가동됩니다.
                    const dailyRecords = historyData[dateStr];
                    const record = dailyRecords.find((r: any) => r.description === selectedTrackerRoutine);
                    
                    if (record) {
                        if (record.checked) {
                            yearlyChecked++;
                            yearlyStatusMap[dateStr] = 'checked'; // 평일에 등록했고 실천도 완수함!
                        } else {
                            yearlyUnchecked++;
                            yearlyStatusMap[dateStr] = 'unchecked'; // 평일에 등록했는데 실천 안 함 (달성률 감소)
                        }
                    } else {
                        // 평일인데 체크리스트에 이 루틴이 없었다면 미가동 처리
                        yearlyStatusMap[dateStr] = 'unlisted'; 
                    }
                }
            }
        });
    }

    // 🎯 달성률 공식 계산: 실천일 / (실천일 + 미실천일) -> 유저님의 원본 코드 규칙 100% 복사
    const totalTrackedDays = yearlyChecked + yearlyUnchecked;
    const yearlyRate = totalTrackedDays === 0 ? 0 : Math.round((yearlyChecked / totalTrackedDays) * 100);
    const yearlyTotal = totalTrackedDays;

    const activeRoutines = routineList.filter(routine => !routine.hidden);
    const dailyTotal = activeRoutines.length;
    const dailyCheckedCount = activeRoutines.filter(routine => routine.checked).length;
    const dailyRate = dailyTotal === 0 ? 0 : Math.round((dailyCheckedCount / dailyTotal) * 100);

    const displayTotal = menuState === "checklist" ? dailyTotal : yearlyTotal;
    const displayRate = menuState === "checklist" ? dailyRate : yearlyRate;

    // 월 표기 영문 변환기 (자바스크립트가 알아서 현재 월의 영문 이름을 찾습니다!)
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const currentMonthLabel = monthNames[today.getMonth()];
    

    // 🌟 [추가] 자식이 돋보기 버튼을 누르면 부모가 대신 실행해 줄 검색 두뇌 함수!
    const handleSearch = () => {
        if (!searchInput.trim()) {
            alert("검색어를 입력해 주세요!");
            return;
        }

        const results = routineList.filter((routine: any) => 
            routine.description.toLowerCase().includes(searchInput.toLowerCase().trim())
        );

        if (results.length > 0) {
            setFilteredRoutines(results);
            setIsSearchPopupOpen(true);
            setIsSearchNoResultPopupOpen(false);
        } else {
            setFilteredRoutines([]);
            setIsSearchPopupOpen(false);
            setIsSearchNoResultPopupOpen(true);
        }
    };

    const [insert_button_state_12_703, setInsert_button_state_12_703] = useState("default");

    const [transitionConfig12_703, setTransitionConfig12_703] = useState({});
    const [transitionConfig12_678, setTransitionConfig12_678] = useState({});
    const [transitionConfig12_667, setTransitionConfig12_667] = useState({});
    const [transitionConfig12_656, setTransitionConfig12_656] = useState({});
    const [transitionConfig12_645, setTransitionConfig12_645] = useState({});
    const [transitionConfig12_634, setTransitionConfig12_634] = useState({});
    const [transitionConfig12_623, setTransitionConfig12_623] = useState({});
    const [transitionConfig12_612, setTransitionConfig12_612] = useState({});
    const [transitionConfig12_601, setTransitionConfig12_601] = useState({});
    const [transitionConfig12_590, setTransitionConfig12_590] = useState({});
    const transitionConfig: any = {
        "12:590_53:212_c": { transition: { duration: 0, ease: [0, 0, 1, 1] } }
    };

    const mouseover_12_703 = () => { setInsert_button_state_12_703("checked"); };
    const click_12_678 = () => { setCheckbox_state_12_678("checked"); };
    const click_12_667 = () => { setCheckbox_state_12_667("checked"); };
    const click_12_656 = () => { setCheckbox_state_12_656("checked"); };
    const click_12_645 = () => { setCheckbox_state_12_645("checked"); };
    const click_12_634 = () => { setCheckbox_state_12_634("checked"); };
    const click_12_623 = () => { setCheckbox_state_12_623("checked"); };
    const click_12_612 = () => { setCheckbox_state_12_612("checked"); };
    const click_12_601 = () => { setCheckbox_state_12_601("checked"); };
    const click_12_590 = () => { setCheckbox_state_12_590("checked"); };

    const getRoutineState = (index: number) => {
        if (routineList[index]) {
            return routineList[index].checked ? "checked" : "default";
        }
        return "default";
    };

    return (
        <div className="scroll-container">
            <div id="10_19" className="Pixso-frame-10_19">
                <div id="7_25" className="Pixso-frame-7_25">
                    <div className="frame-content-7_25">
                        <div id="6_24" className="Pixso-frame-6_24">
                            <div id="6_14" className="Pixso-frame-6_14">
                                <div id="5_2" className="stroke-wrapper-5_2">
                                    <div className="Pixso-frame-5_2">
                                        <div className="frame-content-5_2">
                                            <div id="5_3" className="Pixso-rectangle-5_3"></div>
                                        </div>
                                    </div>
                                    <div className="stroke-5_2"></div>
                                </div>
                                <div id="5_5" className="stroke-wrapper-5_5">
                                    <div className="Pixso-frame-5_5">
                                        <div className="frame-content-5_5">
                                            <div id="5_6" className="Pixso-rectangle-5_6"></div>
                                        </div>
                                    </div>
                                    <div className="stroke-5_5"></div>
                                </div>
                                <div id="6_8" className="stroke-wrapper-6_8">
                                    <div className="Pixso-frame-6_8">
                                        <div className="frame-content-6_8">
                                            <div id="6_9" className="Pixso-rectangle-6_9"></div>
                                        </div>
                                    </div>
                                    <div className="stroke-6_8"></div>
                                </div>
                                <div id="6_11" className="stroke-wrapper-6_11">
                                    <div className="Pixso-frame-6_11">
                                        <div className="frame-content-6_11">
                                            <div id="6_12" className="Pixso-rectangle-6_12"></div>
                                        </div>
                                    </div>
                                    <div className="stroke-6_11"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Menutab
                    id="10_8"
                    className="Pixso-instance-10_8"
                    menu_state={menuState}
                    setMenuState={setMenuState}
                    routineList={routineList}
                    toggleRoutineCheck={toggleRoutineCheck}
                    hideRoutine={hideRoutine}
                    deleteRoutinePermanently={deleteRoutinePermanently}
                    reminderInput={reminderInput}
                    setReminderInput={setReminderInput}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    onSearchClick={handleSearch}
                    yearlyRate={yearlyRate}
                    yearlyStatusMap={yearlyStatusMap}
                    selectedTrackerRoutine={selectedTrackerRoutine}
                    holidays={holidays}
                    
                    slot_92_5778={<div id="12_681" className="Pixso-vector-12_681"></div>}
                    slot_92_5772={<div id="12_674" className="Pixso-vector-12_674"></div>}
                    slot_92_5762={<div id="12_663" className="Pixso-vector-12_663"></div>}
                    slot_92_5752={<div id="12_652" className="Pixso-vector-12_652"></div>}
                    slot_92_5742={<div id="12_641" className="Pixso-vector-12_641"></div>}
                    slot_92_5732={<div id="12_630" className="Pixso-vector-12_630"></div>}
                    slot_92_5722={<div id="12_619" className="Pixso-vector-12_619"></div>}
                    slot_92_5712={<div id="12_608" className="Pixso-vector-12_608"></div>}
                    slot_92_5702={<div id="12_597" className="Pixso-vector-12_597"></div>}
                    slot_92_5692={<div id="12_586" className="Pixso-vector-12_586"></div>}
                    slot_9_37={
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState("tracker")}>
                            <p id="12_711" className="Pixso-paragraph-12_711" style={{ margin: 0 }}>{"TRACKER"}</p>
                        </div>
                    }
                    slot_9_35={
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState("daily_planner")}>
                            <p id="12_709" className="Pixso-paragraph-12_709" style={{ margin: 0 }}>{"TIMELINE"}</p>
                        </div>
                    }
                    slot_9_33={
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: "pointer" }} onClick={() => setMenuState("checklist")}>
                            <p id="12_707" className="Pixso-paragraph-12_707" style={{ margin: 0 }}>{"CHECKLIST"}</p>
                        </div>
                    }
                    slot_92_5800={
                        <Insertbutton
                            id="12_703"
                            className="Pixso-instance-12_703"
                            insert_button_state={insert_button_state_12_703}
                            transitionConfig={transitionConfig12_703}
                            mouseover={mouseover_12_703}
                            slot_53_245={<p id="12_704" className="Pixso-paragraph-12_704">{"INSERT"}</p>}
    click={async () => {
        if (!priInput && !descrbInput && !repInput) {
            setIsChecklistPopupOpen(true);
            return;
        }
        if (!priInput || !descrbInput || !repInput) {
            alert("모든 빈칸을 입력해주세요!");
            return;
        }
        
        const newRoutine = {
            id: Date.now().toString(),
            priority: priInput,
            description: descrbInput,
            repeat: repInput,
            checked: false
        };

        const updatedList = [...routineList, newRoutine];
        setRoutineList(updatedList);
        await saveRoutineData({ routines: updatedList });

        setPriInput("");
        setDescrbInput("");
        setRepInput("");
    }}
></Insertbutton>
                    }
                    
                    slot_92_5799={
                        <input 
                            type="text" 
                            value={repInput} 
                            onChange={(e) => setRepInput(e.target.value)} 
                            placeholder="REP"
                            className="Pixso-paragraph-12_702"
                            style={{ width: "100%", height: "100%", border: "none", outline: "none", background: "transparent", padding: 0, margin: 0, textAlign: "center", color: "inherit" }}
                        />
                    }
                    slot_92_5797={
                        <input 
                            type="text" 
                            value={descrbInput} 
                            onChange={(e) => setDescrbInput(e.target.value)} 
                            placeholder="DESCRB"
                            className="Pixso-paragraph-12_700"
                            style={{ width: "100%", height: "100%", border: "none", outline: "none", background: "transparent", padding: 0, margin: 0, color: "inherit" }}
                        />
                    }
                    slot_92_5795={
                        <input 
                            type="text" 
                            value={priInput} 
                            onChange={(e) => setPriInput(e.target.value)} 
                            placeholder="PRI"
                            className="Pixso-paragraph-12_698"
                            style={{ width: "100%", height: "100%", border: "none", outline: "none", background: "transparent", padding: 0, margin: 0, textAlign: "center", color: "inherit" }}
                        />
                    }
                    slot_92_5788={<p id="12_691" className="Pixso-paragraph-12_691">{"%"}</p>}
                    slot_92_5787={<p id="92_5787" className="Pixso-paragraph-92_5787">{dailyRate}</p>}
                    slot_92_5785={<p id="12_688" className="Pixso-paragraph-12_688">{"RATE:"}</p>}
                    slot_92_5783={<p id="92_5783" className="Pixso-paragraph-92_5783">{dailyTotal}</p>}
                    slot_92_5781={<p id="12_684" className="Pixso-paragraph-12_684">{"TOTAL:"}</p>}
                    
                    slot_92_5685={<p id="12_579" className="Pixso-paragraph-12_579">{"CHECK"}</p>}
                    slot_92_5684={<p id="12_578" className="Pixso-paragraph-12_578">{"REP."}</p>}
                    slot_92_5683={<p id="12_577" className="Pixso-paragraph-12_577">{"DESCR."}</p>}
                    slot_92_5682={<p id="12_576" className="Pixso-paragraph-12_576">{"PRI."}</p>}
                    slot_92_5675={<p id="12_569" className="Pixso-paragraph-12_569">{currentDate}</p>}
                    slot_92_5673={<p id="12_567" className="Pixso-paragraph-12_567">{"DATE:"}</p>}
                    slot_92_5671={<p id="12_565" className="Pixso-paragraph-12_565">{"DON’T FORGET TO CHECKOUT DAILY ROUTINES"}</p>}
                    slot_92_5669={
                        <div id="12_563" className="Pixso-text-12_563">
                            <p
                                id="12_563_0"
                                className="Pixso-paragraph-12_563_0"
                            >
                                <span
                                    id="12_563_0_1"
                                    className="Pixso-span-12_563_0_1"
                                >
                                    {"ROUTINE"}
                                </span>
                            </p>
                            <p
                                id="12_563_1"
                                className="Pixso-paragraph-12_563_1"
                            >
                                <span
                                    id="12_563_1_1"
                                    className="Pixso-span-12_563_1_1"
                                >
                                    {"CHECKLIST"}
                                </span>
                            </p>
                        </div>
                    }
                ></Menutab>

                <div id="6_15" className="Pixso-frame-6_15">
                    <div className="frame-content-6_15">
                        <div id="6_16" className="Pixso-rectangle-6_16"></div>
                        <div id="6_17" className="Pixso-rectangle-6_17"></div>
                        <div id="6_18" className="Pixso-rectangle-6_18"></div>
                        <div id="6_19" className="Pixso-rectangle-6_19"></div>
                        <div id="6_20" className="Pixso-rectangle-6_20"></div>
                    </div>
                </div>
            </div>
        {isChecklistPopupOpen && (
<div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
<Frame6528
routineList={routineList}
onClose={() => setIsChecklistPopupOpen(false)}
onSelectDesc={(desc) => {
setDescrbInput(desc);
setIsChecklistPopupOpen(false);
}}
/>
</div>
)}
            {isSearchPopupOpen && (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
                    <Frame63372 
                        filteredRoutines={filteredRoutines} // 필터링된 진짜 결과만 전달!
                        onClose={() => setIsSearchPopupOpen(false)} // 닫기 스위치
                    onSelectRoutine={(desc) => setSelectedTrackerRoutine(desc)} 
                    />
                </div>
            )}

            {/* 🌟 2. 검색 결과가 없을 때 띄우는 팝업 (Frame63357) */}
            {isNoResultPopupOpen && (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
                    <Frame63357 
                        onClose={() => setIsSearchNoResultPopupOpen(false)} // 닫기 스위치
                    />
                </div>
            )}

        </div> // <-- Frame1019 전체 껍데기 닫는 div
    );
};
export default Frame1019;
