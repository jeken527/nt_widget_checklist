import "@/styles/Datecomponents.css";
interface DatecomponentsProps {
    datestate?: string;
    date_state?: string;
    id?: string;
    className?: string;
    slot_63_409?: React.ReactNode;
    slot_63_410?: React.ReactNode;
    slot_63_412?: React.ReactNode;
    slot_63_413?: React.ReactNode;
}
const Datecomponents = (props: DatecomponentsProps) => {
    const {
        datestate,
        date_state,
        id,
        className = "",
        slot_63_409,
        slot_63_410,
        slot_63_412,
        slot_63_413
    } = props;

    return (
        <div className={`component-65_112 ${className}`} id={id}>
            <div id="65_112" className="Pixso-symbol-65_112">
                {date_state === "disable" && (
                    <div id="65_111" className="Pixso-symbol-65_111">
                        {slot_63_409 ?? (
                            <div
                                id="63_409"
                                className="Pixso-vector-63_409"
                            ></div>
                        )}
                    </div>
                )}
                {date_state === "unchecked" && (
                    <div id="65_110" className="Pixso-symbol-65_110">
                        {slot_63_410 ?? (
                            <div
                                id="63_410"
                                className="Pixso-vector-63_410"
                            ></div>
                        )}
                    </div>
                )}
                {date_state === "unlisted" && (
                    <div id="65_109" className="Pixso-symbol-65_109">
                        {slot_63_412 ?? (
                            <div
                                id="63_412"
                                className="Pixso-vector-63_412"
                            ></div>
                        )}
                    </div>
                )}
                {date_state === "checked" && (
                    <div id="65_108" className="Pixso-symbol-65_108">
                        {slot_63_413 ?? (
                            <div
                                id="63_413"
                                className="Pixso-vector-63_413"
                            ></div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Datecomponents;
