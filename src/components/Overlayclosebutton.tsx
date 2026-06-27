import "@/styles/Overlayclosebutton.css";
interface OverlayclosebuttonProps {
    button3state?: string;
    close_button_state?: string;
    id?: string;
    className?: string;
    slot_63_365?: React.ReactNode;
    slot_63_366?: React.ReactNode;
    slot_63_369?: React.ReactNode;
    slot_63_370?: React.ReactNode;
}
const Overlayclosebutton = (props: OverlayclosebuttonProps) => {
    const {
        button3state,
        close_button_state,
        id,
        className = "",
        slot_63_365,
        slot_63_366,
        slot_63_369,
        slot_63_370
    } = props;

    return (
        <div className={`component-63_362 ${className}`} id={id}>
            <div id="63_362" className="Pixso-symbol-63_362">
                {close_button_state === "default" && (
                    <div id="63_363" className="stroke-wrapper-63_363">
                        <div className="Pixso-symbol-63_363">
                            <div id="63_364" className="Pixso-frame-63_364">
                                {slot_63_365 ?? (
                                    <div
                                        id="63_365"
                                        className="Pixso-vector-63_365"
                                    ></div>
                                )}
                                {slot_63_366 ?? (
                                    <div
                                        id="63_366"
                                        className="Pixso-vector-63_366"
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="stroke-63_363"></div>
                    </div>
                )}
                {close_button_state === "checked" && (
                    <div id="63_367" className="stroke-wrapper-63_367">
                        <div className="Pixso-symbol-63_367">
                            {close_button_state === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            <div id="63_368" className="Pixso-frame-63_368">
                                {slot_63_369 ?? (
                                    <div
                                        id="63_369"
                                        className="Pixso-vector-63_369"
                                    ></div>
                                )}
                                {slot_63_370 ?? (
                                    <div
                                        id="63_370"
                                        className="Pixso-vector-63_370"
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="stroke-63_367"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Overlayclosebutton;
