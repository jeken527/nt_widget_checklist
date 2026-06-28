import Menutab from "@/components/Menutab";
import Insertbutton from "@/components/Insertbutton";
import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import "@/styles/Frame1019.css";

const Frame1019 = () => {
    const [menuState, setMenuState] = useState("checklist");

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
                        ></Insertbutton>
                    }
                    slot_92_5799={<p id="12_702" className="Pixso-paragraph-12_702">{"REP"}</p>}
                    slot_92_5797={<p id="12_700" className="Pixso-paragraph-12_700">{"DESCRB"}</p>}
                    slot_92_5795={<p id="12_698" className="Pixso-paragraph-12_698">{"PRI"}</p>}
                    slot_92_5788={<p id="12_691" className="Pixso-paragraph-12_691">{"%"}</p>}
                    slot_92_5787={<p id="12_690" className="Pixso-paragraph-12_690">{"80"}</p>}
                    slot_92_5785={<p id="12_688" className="Pixso-paragraph-12_688">{"RATE:"}</p>}
                    slot_92_5783={<p id="12_686" className="Pixso-paragraph-12_686">{"10"}</p>}
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
                    slot_92_5675={<p id="12_569" className="Pixso-paragraph-12_569">{"2026 - 06 - 24"}</p>}
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
