import { OverlayManager } from "@/components/overlay";
import { withStopPropagation } from "@/utils/utils";
import Button3components from "@/components/Button3components";
import { useNavigate } from "react-router";
import { getPathByGuid } from "@/router/routes";
import { useState } from "react";
import Routinedataselect from "@/components/Routinedataselect";
import "@/styles/Frame63372.css";
const Frame63372 = ({ setMenuState }: { setMenuState: any }) => {
    const navigate = useNavigate();
    const [button3state_63_376, setButton3state_63_376] = useState("default");
    const [routinedatastate_63_402, setRoutinedatastate_63_402] =
        useState("default");
    const [routinedatastate_73_4962, setRoutinedatastate_73_4962] =
        useState("default");
    const [routinedatastate_73_4965, setRoutinedatastate_73_4965] =
        useState("default");
    const [routinedatastate_73_4968, setRoutinedatastate_73_4968] =
        useState("default");
    const [routinedatastate_73_4970, setRoutinedatastate_73_4970] =
        useState("default");
    const [routinedatastate_73_4972, setRoutinedatastate_73_4972] =
        useState("default");
    const [routinedatastate_73_4974, setRoutinedatastate_73_4974] =
        useState("default");
    const [transitionConfig63_402, setTransitionConfig63_402] = useState({});
    const [transitionConfig73_4962, setTransitionConfig73_4962] = useState({});
    const [transitionConfig73_4965, setTransitionConfig73_4965] = useState({});
    const [transitionConfig73_4968, setTransitionConfig73_4968] = useState({});
    const [transitionConfig73_4970, setTransitionConfig73_4970] = useState({});
    const [transitionConfig73_4972, setTransitionConfig73_4972] = useState({});
    const [transitionConfig73_4974, setTransitionConfig73_4974] = useState({});
    const [transitionConfig63_376, setTransitionConfig63_376] = useState({});
    const transitionConfig: any = {
        "73:4974_63:398_mo": { transition: { duration: 0, ease: [0, 0, 1, 1] } }
    };

    const click_63_376_63_311_135_151 = () => {
        navigate(getPathByGuid("63:315"), {
            state: {
                from: "63:376_63:311_135:151",
                et: "c"
            }
        });
    };

    const click_63_402_63_399_63_406 = () => {
        navigate(getPathByGuid("10:19"), {
            state: {
                from: "63:402_63:399_63:406",
                et: "c"
            }
        });
    };

    const click_73_4962_63_399_63_406 = () => {
        navigate(getPathByGuid("10:19"), {
            state: {
                from: "73:4962_63:399_63:406",
                et: "c"
            }
        });
    };

    const click_73_4965_63_399_63_406 = () => {
        navigate(getPathByGuid("10:19"), {
            state: {
                from: "73:4965_63:399_63:406",
                et: "c"
            }
        });
    };

    const click_73_4968_63_399_63_406 = () => {
        navigate(getPathByGuid("10:19"), {
            state: {
                from: "73:4968_63:399_63:406",
                et: "c"
            }
        });
    };

    const click_73_4970_63_399_63_406 = () => {
        navigate(getPathByGuid("10:19"), {
            state: {
                from: "73:4970_63:399_63:406",
                et: "c"
            }
        });
    };

    const click_73_4972_63_399_63_406 = () => {
        navigate(getPathByGuid("10:19"), {
            state: {
                from: "73:4972_63:399_63:406",
                et: "c"
            }
        });
    };

    const click_73_4974_63_399_63_406 = () => {
        navigate(getPathByGuid("10:19"), {
            state: {
                from: "73:4974_63:399_63:406",
                et: "c"
            }
        });
    };

    const mouseover_63_402 = () => {
        setRoutinedatastate_63_402("checked");
    };

    const mouseover_73_4962 = () => {
        setRoutinedatastate_73_4962("checked");
    };

    const mouseover_73_4965 = () => {
        setRoutinedatastate_73_4965("checked");
    };

    const mouseover_73_4968 = () => {
        setRoutinedatastate_73_4968("checked");
    };

    const mouseover_73_4970 = () => {
        setRoutinedatastate_73_4970("checked");
    };

    const mouseover_73_4972 = () => {
        setRoutinedatastate_73_4972("checked");
    };

    const mouseover_73_4974 = () => {
        setRoutinedatastate_73_4974("checked");
    };

    const mouseover_63_376 = () => {
        setButton3state_63_376("checked");
    };

    return (
        <div className="scroll-container">
            <div id="63_372" className="stroke-wrapper-63_372">
                <div className="Pixso-frame-63_372">
                    <div className="frame-content-63_372">
                        <div
                            id="63_373"
                            className="Pixso-frame-63_373"
                            onClick={withStopPropagation(() => {
                                OverlayManager.instance.close();
                            })}
                        >
                            <div className="frame-content-63_373">
                                <p
                                    id="63_375"
                                    className="Pixso-paragraph-63_375"
                                >
                                    {"SEARCH"}
                                </p>
                                <Button3components
                                    id="63_376"
                                    className="Pixso-instance-63_376"
                                    onClick63_37663_311139_132={withStopPropagation(
                                        () => {
                                            OverlayManager.instance.close();
                                        }
                                    )}
                                    onClick63_37663_311135_151={withStopPropagation(
                                        click_63_376_63_311_135_151
                                    )}
                                    button3state={button3state_63_376}
                                    transitionConfig={transitionConfig63_376}
                                    mouseover={mouseover_63_376}
                                ></Button3components>
                            </div>
                        </div>
                        <div id="63_391" className="stroke-wrapper-63_391">
                            <div className="Pixso-frame-63_391">
                                <div className="shadow-blend-unknown-0"></div>
                                <div className="frame-content-63_391">
                                    <Routinedataselect
                                        id="63_402"
                                        className="Pixso-instance-63_402"
                                        onClick63_40263_39963_406={withStopPropagation(
                                            click_63_402_63_399_63_406
                                        )}
                                        routinedatastate={
                                            routinedatastate_63_402
                                        }
                                        transitionConfig={
                                            transitionConfig63_402
                                        }
                                        mouseover={mouseover_63_402}
                                        slot_63_393={
                                            <p
                                                id="12_516"
                                                className="Pixso-paragraph-12_516"
                                            >
                                                {"데이터 정리하기"}
                                            </p>
                                        }
                                    ></Routinedataselect>
                                    <Routinedataselect
                                        id="73_4962"
                                        className="Pixso-instance-73_4962"
                                        onClick73_496263_39963_406={withStopPropagation(
                                            click_73_4962_63_399_63_406
                                        )}
                                        routinedatastate={
                                            routinedatastate_73_4962
                                        }
                                        transitionConfig={
                                            transitionConfig73_4962
                                        }
                                        mouseover={mouseover_73_4962}
                                        slot_63_393={
                                            <p
                                                id="12_442"
                                                className="Pixso-paragraph-12_442"
                                            >
                                                {"데이터 정리하기"}
                                            </p>
                                        }
                                    ></Routinedataselect>
                                    <Routinedataselect
                                        id="73_4965"
                                        className="Pixso-instance-73_4965"
                                        onClick73_496563_39963_406={withStopPropagation(
                                            click_73_4965_63_399_63_406
                                        )}
                                        routinedatastate={
                                            routinedatastate_73_4965
                                        }
                                        transitionConfig={
                                            transitionConfig73_4965
                                        }
                                        mouseover={mouseover_73_4965}
                                        slot_63_393={
                                            <p
                                                id="12_522"
                                                className="Pixso-paragraph-12_522"
                                            >
                                                {"데이터 정리하기"}
                                            </p>
                                        }
                                    ></Routinedataselect>
                                    <Routinedataselect
                                        id="73_4968"
                                        className="Pixso-instance-73_4968"
                                        onClick73_496863_39963_406={withStopPropagation(
                                            click_73_4968_63_399_63_406
                                        )}
                                        routinedatastate={
                                            routinedatastate_73_4968
                                        }
                                        transitionConfig={
                                            transitionConfig73_4968
                                        }
                                        mouseover={mouseover_73_4968}
                                        slot_63_393={
                                            <p
                                                id="12_543"
                                                className="Pixso-paragraph-12_543"
                                            >
                                                {"데이터 정리하기"}
                                            </p>
                                        }
                                    ></Routinedataselect>
                                    <Routinedataselect
                                        id="73_4970"
                                        className="Pixso-instance-73_4970"
                                        onClick73_497063_39963_406={withStopPropagation(
                                            click_73_4970_63_399_63_406
                                        )}
                                        routinedatastate={
                                            routinedatastate_73_4970
                                        }
                                        transitionConfig={
                                            transitionConfig73_4970
                                        }
                                        mouseover={mouseover_73_4970}
                                        slot_63_393={
                                            <p
                                                id="12_420"
                                                className="Pixso-paragraph-12_420"
                                            >
                                                {"데이터 정리하기"}
                                            </p>
                                        }
                                    ></Routinedataselect>
                                    <Routinedataselect
                                        id="73_4972"
                                        className="Pixso-instance-73_4972"
                                        onClick73_497263_39963_406={withStopPropagation(
                                            click_73_4972_63_399_63_406
                                        )}
                                        routinedatastate={
                                            routinedatastate_73_4972
                                        }
                                        transitionConfig={
                                            transitionConfig73_4972
                                        }
                                        mouseover={mouseover_73_4972}
                                        slot_63_393={
                                            <p
                                                id="12_417"
                                                className="Pixso-paragraph-12_417"
                                            >
                                                {"데이터 정리하기"}
                                            </p>
                                        }
                                    ></Routinedataselect>
                                    <Routinedataselect
                                        id="73_4974"
                                        className="Pixso-instance-73_4974"
                                        onClick73_497463_39963_406={withStopPropagation(
                                            click_73_4974_63_399_63_406
                                        )}
                                        routinedatastate={
                                            routinedatastate_73_4974
                                        }
                                        transitionConfig={
                                            transitionConfig73_4974
                                        }
                                        mouseover={mouseover_73_4974}
                                        slot_63_393={
                                            <p
                                                id="12_403"
                                                className="Pixso-paragraph-12_403"
                                            >
                                                {"데이터 정리하기"}
                                            </p>
                                        }
                                    ></Routinedataselect>
                                </div>
                            </div>
                            <div className="stroke-63_391"></div>
                        </div>
                    </div>
                </div>
                <div className="stroke-63_372"></div>
            </div>
        </div>
    );
};
export default Frame63372;
