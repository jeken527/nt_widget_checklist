import Menutab from "@/components/Menutab";
import Insertbutton from "@/components/Insertbutton";
import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import "@/styles/Frame1019.css";

const Frame1019 = () => {
    const [menuState, setMenuState] = useState("checklist");

    const [priInput, setPriInput] = useState("");
    const [descrbInput, setDescrbInput] = useState("");
    const [repInput, setRepInput] = useState("");
    const [routineList, setRoutineList] = useState<any[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleInsertClick = () => {
        if (priInput.trim() === "" && descrbInput.trim() === "" && repInput.trim() === "") {
            setIsPopupOpen(true);
            alert("CHECKLIST_POPUP 이 나타납니다!");
        }
        else if (priInput.trim() !== "" && descrbInput.trim() !== "" && repInput.trim() !== "") {
            const newRoutine = {
                id: Date.now(),
                priority: priInput,
                description: descrbInput,
                repeat: repInput
            };
            setRoutineList([...routineList, newRoutine]);
            
            setPriInput("");
            setDescrbInput("");
            setRepInput("");
        }
    };
    const today = new Date();
    const currentDate = `${today.getFullYear()}. ${String(today.getMonth() + 1).padStart(2, '0')}. ${String(today.getDate()).padStart(2, '0')}`;
    const currentYear = `${today.getFullYear()}`;

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
                            click={handleInsertClick}
                            transitionConfig={transitionConfig12_703}
                            mouseover={mouseover_12_703}
                            slot_53_245={<p id="12_704" className="Pixso-paragraph-12_704">{"INSERT"}</p>}
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
                    slot_92_5787={<p id="12_690" className="Pixso-paragraph-12_690">{"80"}</p>}
                    slot_92_5785={<p id="12_688" className="Pixso-paragraph-12_688">{"RATE:"}</p>}
                    slot_92_5783={<p id="12_686" className="Pixso-paragraph-12_686">{"10"}</p>}
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
                            <p id="12_563_0" className="Pixso-paragraph-12_563_0">
                                <span id="12_563_0_1" className="Pixso-span-12_563_0_1">{"ROUTINE"}</span>
                            </p>
                            <p id="12_563_1" className="Pixso-paragraph-12_563_1">
                                <span id="12_563_1_1" className="Pixso-span-12_563_1_1">{"CHECKLIST"}</span>
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
        </div>
    );
};
export default Frame1019;
