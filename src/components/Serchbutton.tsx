import { withStopPropagation } from "@/utils/utils";
import "@/styles/Serchbutton.css";

interface SerchbuttonProps {
    search_button_state?: string;
    searchbutton?: string;
    id?: string;
    className?: string;
    mouseover?: (e: any) => void;
    click?: (e: any) => void;
}

const Serchbutton = (props: SerchbuttonProps) => {
    const {
        search_button_state,
        searchbutton,
        id,
        className = "",
        mouseover,
        click
    } = props;

    return (
        <div
            className={`component-55_283 ${className}`}
            id={id}
            onMouseOver={mouseover ? withStopPropagation(mouseover) : undefined}
            onClick={click ? withStopPropagation(click) : undefined}
            style={{ cursor: "pointer" }}
        >
            <div id="55_283" className="Pixso-symbol-55_283">
                {search_button_state === "default" && (
                    <div id="55_282" className="stroke-wrapper-55_282">
                        <div className="Pixso-symbol-55_282">
                            <div
                                id="55_272"
                                className="Pixso-rectangle-55_272"
                            ></div>
                        </div>
                        <div className="stroke-55_282"></div>
                    </div>
                )}
                {search_button_state === "checked" && (
                    <div id="55_281" className="stroke-wrapper-55_281">
                        <div className="Pixso-symbol-55_281">
                            {search_button_state === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            <div
                                id="55_275"
                                className="Pixso-rectangle-55_275"
                            ></div>
                        </div>
                        <div className="stroke-55_281"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Serchbutton;
