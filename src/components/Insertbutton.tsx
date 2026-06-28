import { withStopPropagation } from "@/utils/utils";
import "@/styles/Insertbutton.css";

interface InsertbuttonProps {
    insert_button_state?: string;
    id?: string;
    className?: string;
    click?: (e: any) => void; // 🌟 클릭 이벤트를 받을 수 있도록 구멍을 뚫어줍니다.
    mouseover?: (e: any) => void;
    slot_53_245?: React.ReactNode;
    slot_53_248?: React.ReactNode;
}

const Insertbutton = (props: InsertbuttonProps) => {
    const {
        insert_button_state,
        id,
        className = "",
        click, // 🌟 부모가 넘겨준 click 함수를 꺼냅니다.
        mouseover,
        slot_53_245,
        slot_53_248
    } = props;

    return (
        <div
            className={`component-53_252 ${className}`}
            id={id}
            onClick={click ? withStopPropagation(click) : undefined} // 🌟 버튼 클릭 시 함수가 실행되도록 연결!
            onMouseOver={mouseover ? withStopPropagation(mouseover) : undefined}
        >
            <div id="53_252" className="Pixso-symbol-53_252">
                {insert_button_state === "default" && (
                    <div id="53_251" className="stroke-wrapper-53_251">
                        <div className="Pixso-symbol-53_251">
                            {slot_53_245 ?? (
                                <p id="53_245" className="Pixso-paragraph-53_245">{"INSERT"}</p>
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
                                <p id="53_248" className="Pixso-paragraph-53_248">{"INSERT"}</p>
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
