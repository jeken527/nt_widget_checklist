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
    const [filteredRoutines, setFilteredRoutines] = useState<any[]>([]); 
    const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false); 
    const [isNoResultPopupOpen, setIsSearchNoResultPopupOpen] = useState(false);
    const [priorityInput, setPriorityInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("");
    const [repeatInput, setRepeatInput] = useState("");
    useEffect(() => {
        const loadAndCheckReset = async () => {
            setIsLoading(true);
            const data = await fetchRoutineData(); 

            if (data) {
                const todayKST = getKSTDateString();
                
                let savedRoutines = data.routines || [];
                let savedHistory = data.history || {};
                let savedPlanner = data.daily_planner || ""; // 🌟 만약 텍스트 그대로 저장했다면 기본값 ""
                const lastDate = data.lastDate || todayKST;

                // ⏰ 날이 바뀌었을 때
                if (lastDate !== todayKST) {
                    const dailyRecord = savedRoutines.map((r: any) => ({
                        description: r.description,
                        checked: r.checked
                    }));
                    
                    if (dailyRecord.length > 0) {
                        savedHistory[lastDate] = dailyRecord; 
                    }
                    // 1. 루틴 체크박스만 초기화!
                    savedRoutines = savedRoutines.map((r: any) => ({ ...r, checked: false }));
                    
                    // ❌ 데일리 플래너 리셋 코드는 넣지 않습니다! (savedPlanner 데이터 유지)

                    // 2. 금고에 그대로 저장
                    await saveRoutineData({
                        lastDate: todayKST,
                        routines: savedRoutines,
                        history: savedHistory,
                        daily_planner: savedPlanner // 🌟 어제 쓰던 내용 그대로 백업!
                    });
                }

                // 📺 [화면 출력] 정리가 다 끝난 데이터를 진짜 화면 변수에 세팅!
                setRoutineList(savedRoutines);
                setHistoryData(savedHistory);
                
                // 🌟 [주석 해제 및 수정] 금고에서 가져온 리마인더 텍스트를 부모 변수에 보관합니다.
                setReminderInput(savedPlanner); 
            }
            setIsLoading(false);
        };
        
        loadAndCheckReset();
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
            daily_planner: {} // 데일리 플래너 데이터 유지 (필요에 따라 변수 추가)
        });
    };
    const [isChecklistPopupOpen, setIsChecklistPopupOpen] = useState(false);
    const [priInput, setPriInput] = useState("");
    const [descrbInput, setDescrbInput] = useState("");
    const [repInput, setRepInput] = useState("");
    const today = new Date();
    const currentDate = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;
    // 🌟 [추가] 트래커 달성률 및 달력 도트 색칠 데이터 계산 로직
    const currentYear = today.getFullYear();
    const currentMonthStr = String(today.getMonth() + 1).padStart(2, '0');
    const currentMonthPrefix = `${currentYear}-${currentMonthStr}`; // 예: "2026-07"
    
    let yearlyTotal = 0, yearlyChecked = 0;
    let monthlyTotal = 0, monthlyChecked = 0;
    const monthlyStatusMap: { [date: string]: string } = {};

    if (selectedTrackerRoutine && historyData) {
        Object.keys(historyData).forEach((dateStr) => {
            const dailyRecords = historyData[dateStr];
            // 해당 날짜에 선택된 루틴이 등록되어 있었는지 확인
            const record = dailyRecords.find((r: any) => r.description === selectedTrackerRoutine);
            
            if (record) {
                // [연간 통계 합산]
                if (dateStr.startsWith(String(currentYear))) {
                    yearlyTotal++;
                    if (record.checked) yearlyChecked++;
                }

                // [월간 통계 합산 및 도트 달력 상태 저장]
                if (dateStr.startsWith(currentMonthPrefix)) {
                    monthlyTotal++;
                    if (record.checked) monthlyChecked++;
                    // 체크 했으면 'checked', 안 했으면 'unchecked' 기록!
                    monthlyStatusMap[dateStr] = record.checked ? 'checked' : 'unchecked';
                }
            }
        });
    }

    // 달성률(%) 계산 (0으로 나누기 방지)
    const yearlyRate = yearlyTotal === 0 ? 0 : Math.round((yearlyChecked / yearlyTotal) * 100);
    const monthlyRate = monthlyTotal === 0 ? 0 : Math.round((monthlyChecked / monthlyTotal) * 100);

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
    const [checkbox_state_12_678, setCheckbox_state_12_678] = useState("default");
    const [checkbox_state_12_667, setCheckbox_state_12_667] = useState("default");
    const [checkbox_state_12_656, setCheckbox_state_12_656] = useState("default");
    const [checkbox_state_12_645, setCheckbox_state_12_645] = useState("default");
    const [checkbox_state_12_634, setCheckbox_state_12_634] = useState("default");
    const [checkbox_state_12_623, setCheckbox_state_12_623] = useState("default");
    const [checkbox_state_12_612, setCheckbox_state_12_612] = useState("default");
    const [checkbox_state_12_601, setCheckbox_state_12_601] = useState("default");
    const [checkbox_state_12_590, setCheckbox_state_12_590] = useState("default");
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
                    reminderInput={reminderInput}
                    setReminderInput={setReminderInput}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    onSearchClick={handleSearch}
                    monthlyStatusMap={monthlyStatusMap} 
                    monthlyRate={monthlyRate}
                    yearlyRate={yearlyRate}
                    selectedTrackerRoutine={selectedTrackerRoutine}
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
                    slot_92_5787={<p className="Pixso-paragraph-12_690">{yearlyRate}</p>}
                    slot_92_5785={<p id="12_688" className="Pixso-paragraph-12_688">{"RATE:"}</p>}
                    slot_92_5783={<p className="Pixso-paragraph-12_686">{yearlyTotal}</p>}
                    slot_92_5781={<p id="12_684" className="Pixso-paragraph-12_684">{"TOTAL:"}</p>}
                    slot_92_5776={
                        <Checkbox
                            id="12_678"
                            className="Pixso-instance-12_678"
                            checkbox_state={checkbox_state_12_678}
                            transitionConfig={transitionConfig12_678}
                            click={click_12_678}
                        ></Checkbox>
                    }
                    slot_92_5774={<p id="12_676" className="Pixso-paragraph-12_676">{"3"}</p>}
                    slot_92_5771={<p id="12_673" className="Pixso-paragraph-12_673">{"DUMMY"}</p>}
                    slot_92_5769={<p id="12_671" className="Pixso-paragraph-12_671">{"9"}</p>}
                    slot_92_5766={
                        <Checkbox
                            id="12_667"
                            className="Pixso-instance-12_667"
                            checkbox_state={checkbox_state_12_667}
                            transitionConfig={transitionConfig12_667}
                            click={click_12_667}
                        ></Checkbox>
                    }
                    slot_92_5764={<p id="12_665" className="Pixso-paragraph-12_665">{"3"}</p>}
                    slot_92_5761={<p id="12_662" className="Pixso-paragraph-12_662">{"DUMMY"}</p>}
                    slot_92_5759={<p id="12_660" className="Pixso-paragraph-12_660">{"8"}</p>}
                    slot_92_5756={
                        <Checkbox
                            id="12_656"
                            className="Pixso-instance-12_656"
                            checkbox_state={checkbox_state_12_656}
                            transitionConfig={transitionConfig12_656}
                            click={click_12_656}
                        ></Checkbox>
                    }
                    slot_92_5754={<p id="12_654" className="Pixso-paragraph-12_654">{"1"}</p>}
                    slot_92_5751={<p id="12_651" className="Pixso-paragraph-12_651">{"DUMMY"}</p>}
                    slot_92_5749={<p id="12_649" className="Pixso-paragraph-12_649">{"7"}</p>}
                    slot_92_5746={
                        <Checkbox
                            id="12_645"
                            className="Pixso-instance-12_645"
                            checkbox_state={checkbox_state_12_645}
                            transitionConfig={transitionConfig12_645}
                            click={click_12_645}
                        ></Checkbox>
                    }
                    slot_92_5744={<p id="12_643" className="Pixso-paragraph-12_643">{"5"}</p>}
                    slot_92_5741={<p id="12_640" className="Pixso-paragraph-12_640">{"DUMMY"}</p>}
                    slot_92_5739={<p id="12_638" className="Pixso-paragraph-12_638">{"6"}</p>}
                    slot_92_5736={
                        <Checkbox
                            id="12_634"
                            className="Pixso-instance-12_634"
                            checkbox_state={checkbox_state_12_634}
                            transitionConfig={transitionConfig12_634}
                            click={click_12_634}
                        ></Checkbox>
                    }
                    slot_92_5734={<p id="12_632" className="Pixso-paragraph-12_632">{"1"}</p>}
                    slot_92_5731={<p id="12_629" className="Pixso-paragraph-12_629">{"이슈 크롤링"}</p>}
                    slot_92_5729={<p id="12_627" className="Pixso-paragraph-12_627">{"5"}</p>}
                    slot_92_5726={
                        <Checkbox
                            id="12_623"
                            className="Pixso-instance-12_623"
                            checkbox_state={checkbox_state_12_623}
                            transitionConfig={transitionConfig12_623}
                            click={click_12_623}
                        ></Checkbox>
                    }
                    slot_92_5724={<p id="12_621" className="Pixso-paragraph-12_621">{"2"}</p>}
                    slot_92_5721={<p id="12_618" className="Pixso-paragraph-12_618">{"회의 안건 찾아보기"}</p>}
                    slot_92_5719={<p id="12_616" className="Pixso-paragraph-12_616">{"4"}</p>}
                    slot_92_5716={
                        <Checkbox
                            id="12_612"
                            className="Pixso-instance-12_612"
                            checkbox_state={checkbox_state_12_612}
                            transitionConfig={transitionConfig12_612}
                            click={click_12_612}
                        ></Checkbox>
                    }
                    slot_92_5714={<p id="12_610" className="Pixso-paragraph-12_610">{"2"}</p>}
                    slot_92_5711={<p id="12_607" className="Pixso-paragraph-12_607">{"폴더 정리 및 메일 확인"}</p>}
                    slot_92_5709={<p id="12_605" className="Pixso-paragraph-12_605">{"3"}</p>}
                    slot_92_5706={
                        <Checkbox
                            id="12_601"
                            className="Pixso-instance-12_601"
                            checkbox_state={checkbox_state_12_601}
                            transitionConfig={transitionConfig12_601}
                            click={click_12_601}
                        ></Checkbox>
                    }
                    slot_92_5704={<p id="12_599" className="Pixso-paragraph-12_599">{"1"}</p>}
                    slot_92_5701={<p id="12_596" className="Pixso-paragraph-12_596">{"데이터 분석하기"}</p>}
                    slot_92_5699={<p id="12_594" className="Pixso-paragraph-12_594">{"2"}</p>}
                    slot_92_5696={
                        <Checkbox
                            id="12_590"
                            className="Pixso-instance-12_590"
                            checkbox_state={checkbox_state_12_590}
                            transitionConfig={transitionConfig12_590}
                            click={click_12_590}
                        ></Checkbox>
                    }
                    slot_92_5694={<p id="12_588" className="Pixso-paragraph-12_588">{"1"}</p>}
                    slot_92_5691={<p id="12_585" className="Pixso-paragraph-12_585">{"일간 데이터 정리하기"}</p>}
                    slot_92_5689={<p id="12_583" className="Pixso-paragraph-12_583">{"1"}</p>}
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
        {/* 2. 하단 두 번째 줄 서브타이틀 구역 */}
        <p className="Pixso-paragraph-12_563_1">
            <span 
                className="Pixso-span-12_563_1_1"
                style={{ 
                    fontSize: "35px", 
                    fontFamily: "'Retro Gaming-Regular', sans-serif"
                }}
            >
                {menuState === "checklist" && "CHECKLIST"}
                {menuState === "daily_planner" && "TIMELINE"}
                {menuState === "tracker" && "TRACKER"}
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
