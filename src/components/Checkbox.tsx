import { withStopPropagation } from "@/utils/utils";
import "@/styles/Checkbox.css";
interface CheckboxProps {
    checkbox?: string;
    checkbox_state?: string;
    id?: string;
    className?: string;
    click?: (e: any) => void;
    slot_53_207?: React.ReactNode;
    slot_53_208?: React.ReactNode;
}
const Checkbox = (props: CheckboxProps) => {
    const {
        checkbox,
        checkbox_state,
        id,
        className = "",
        click,
        slot_53_207,
        slot_53_208
    } = props;

    return (
        <div
            className={`component-53_214 ${className}`}
            id={id}
            onClick={withStopPropagation(click)}
        >
            <div id="53_214" className="Pixso-symbol-53_214">
                {checkbox_state === "default" && (
                    <div id="53_213" className="Pixso-symbol-53_213">
                        <div id="53_202" className="stroke-wrapper-53_202">
                            <div className="Pixso-rectangle-53_202"></div>
                            <div className="stroke-53_202"></div>
                        </div>
                    </div>
                )}
                {checkbox_state === "checked" && (
                    <div id="53_212" className="stroke-wrapper-53_212">
                        <div className="Pixso-symbol-53_212">
                            {checkbox_state === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            <div id="53_206" className="Pixso-frame-53_206">
                                {slot_53_207 ?? (
                                    <div
                                        id="53_207"
                                        className="Pixso-vector-53_207"
                                    ></div>
                                )}
                                {slot_53_208 ?? (
                                    <div
                                        id="53_208"
                                        className="Pixso-vector-53_208"
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="stroke-53_212"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Checkbox;
