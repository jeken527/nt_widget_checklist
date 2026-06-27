import { withStopPropagation } from "@/utils/utils";
import "@/styles/Button3components.css";
interface Button3componentsProps {
    button3state?: string;
    id?: string;
    className?: string;
    onClick65_3263_311139_132?: (e: any) => void;
    onClick65_3263_311135_151?: (e: any) => void;
    onClick63_32863_311139_132?: (e: any) => void;
    onClick63_32863_311135_151?: (e: any) => void;
    onClick63_37663_311139_132?: (e: any) => void;
    onClick63_37663_311135_151?: (e: any) => void;
    mouseover?: (e: any) => void;
    slot_63_313?: React.ReactNode;
    slot_63_314?: React.ReactNode;
    slot_63_317?: React.ReactNode;
    slot_63_318?: React.ReactNode;
}
const Button3components = (props: Button3componentsProps) => {
    const {
        button3state,
        id,
        className = "",
        onClick65_3263_311139_132,
        onClick65_3263_311135_151,
        onClick63_32863_311139_132,
        onClick63_32863_311135_151,
        onClick63_37663_311139_132,
        onClick63_37663_311135_151,
        mouseover,
        slot_63_313,
        slot_63_314,
        slot_63_317,
        slot_63_318
    } = props;

    return (
        <div
            className={`component-63_310 ${className}`}
            id={id}
            onMouseover={withStopPropagation(mouseover)}
        >
            <div id="63_310" className="Pixso-symbol-63_310">
                {button3state === "default" && (
                    <div id="63_311" className="stroke-wrapper-63_311">
                        <div
                            className="Pixso-symbol-63_311"
                            onClick={
                                onClick63_37663_311135_151 ||
                                onClick63_37663_311139_132 ||
                                onClick63_32863_311135_151 ||
                                onClick63_32863_311139_132 ||
                                onClick65_3263_311135_151 ||
                                onClick65_3263_311139_132 ||
                                onClick65_3263_311135_151 ||
                                onClick65_3263_311139_132 ||
                                onClick65_3263_311135_151 ||
                                onClick65_3263_311139_132
                            }
                        >
                            <div id="63_312" className="Pixso-frame-63_312">
                                {slot_63_313 ?? (
                                    <div
                                        id="63_313"
                                        className="Pixso-vector-63_313"
                                    ></div>
                                )}
                                {slot_63_314 ?? (
                                    <div
                                        id="63_314"
                                        className="Pixso-vector-63_314"
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="stroke-63_311"></div>
                    </div>
                )}
                {button3state === "checked" && (
                    <div id="63_315" className="stroke-wrapper-63_315">
                        <div className="Pixso-symbol-63_315">
                            {button3state === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            <div id="63_316" className="Pixso-frame-63_316">
                                {slot_63_317 ?? (
                                    <div
                                        id="63_317"
                                        className="Pixso-vector-63_317"
                                    ></div>
                                )}
                                {slot_63_318 ?? (
                                    <div
                                        id="63_318"
                                        className="Pixso-vector-63_318"
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="stroke-63_315"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Button3components;
