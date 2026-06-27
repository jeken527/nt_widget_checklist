import { withStopPropagation } from "@/utils/utils";
import "@/styles/Insertbutton.css";
interface InsertbuttonProps {
    insert_button_state?: string;
    id?: string;
    className?: string;
    mouseover?: (e: any) => void;
    slot_53_245?: React.ReactNode;
    slot_53_248?: React.ReactNode;
}
const Insertbutton = (props: InsertbuttonProps) => {
    const {
        insert_button_state,
        id,
        className = "",
        mouseover,
        slot_53_245,
        slot_53_248
    } = props;

    return (
        <div
            className={`component-53_252 ${className}`}
            id={id}
            onMouseover={withStopPropagation(mouseover)}
        >
            <div id="53_252" className="Pixso-symbol-53_252">
                {insert_button_state === "default" && (
                    <div id="53_251" className="stroke-wrapper-53_251">
                        <div className="Pixso-symbol-53_251">
                            {slot_53_245 ?? (
                                <p
                                    id="53_245"
                                    className="Pixso-paragraph-53_245"
                                >
                                    {"INSERT"}
                                </p>
                            )}
                        </div>
                        <div className="stroke-53_251"></div>
                    </div>
                )}
                {insert_button_state === "checked" && (
                    <div id="53_250" className="stroke-wrapper-53_250">
                        <div className="Pixso-symbol-53_250">
                            {insert_button_state === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            {slot_53_248 ?? (
                                <p
                                    id="53_248"
                                    className="Pixso-paragraph-53_248"
                                >
                                    {"INSERT"}
                                </p>
                            )}
                        </div>
                        <div className="stroke-53_250"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Insertbutton;
