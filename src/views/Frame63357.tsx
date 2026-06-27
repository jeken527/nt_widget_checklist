import { OverlayManager } from "@/components/overlay";
import { withStopPropagation } from "@/utils/utils";
import Button3components from "@/components/Button3components";
import { useNavigate } from "react-router";
import { getPathByGuid } from "@/router/routes";
import { useState } from "react";
import "@/styles/Frame63357.css";
const Frame63357 = () => {
    const navigate = useNavigate();
    const [button3state_63_328, setButton3state_63_328] = useState("default");
    const [transitionConfig63_328, setTransitionConfig63_328] = useState({});
    const transitionConfig: any = {
        "63:328_63:315_mo": {
            transition: { duration: 0, ease: [0.215, 0.61, 0.355, 1] }
        }
    };

    const click_63_328_63_311_135_151 = () => {
        navigate(getPathByGuid("63:315"), {
            state: {
                from: "63:328_63:311_135:151",
                et: "c"
            }
        });
    };

    const mouseover_63_328 = () => {
        setButton3state_63_328("checked");
    };

    return (
        <div className="scroll-container">
            <div id="63_357" className="stroke-wrapper-63_357">
                <div className="Pixso-frame-63_357">
                    <div className="frame-content-63_357">
                        <div
                            id="63_325"
                            className="Pixso-frame-63_325"
                            onClick={withStopPropagation(() => {
                                OverlayManager.instance.close();
                            })}
                        >
                            <div className="frame-content-63_325">
                                <p
                                    id="63_327"
                                    className="Pixso-paragraph-63_327"
                                >
                                    {"SEARCH"}
                                </p>
                                <Button3components
                                    id="63_328"
                                    className="Pixso-instance-63_328"
                                    onClick63_32863_311139_132={withStopPropagation(
                                        () => {
                                            OverlayManager.instance.close();
                                        }
                                    )}
                                    onClick63_32863_311135_151={withStopPropagation(
                                        click_63_328_63_311_135_151
                                    )}
                                    button3state={button3state_63_328}
                                    transitionConfig={transitionConfig63_328}
                                    mouseover={mouseover_63_328}
                                ></Button3components>
                            </div>
                        </div>
                        <div id="63_330" className="Pixso-frame-63_330">
                            <div className="frame-content-63_330">
                                <p
                                    id="63_331"
                                    className="Pixso-paragraph-63_331"
                                >
                                    {"N0 RESULT"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="stroke-63_357"></div>
            </div>
        </div>
    );
};
export default Frame63357;
