import { useState } from "react"; // 🌟 Button3처럼 마우스 상태를 기억하기 위해 useState 추가
import { withStopPropagation } from "@/utils/utils";
import "@/styles/Insertbutton.css";

interface InsertbuttonProps {
    insert_button_state?: string;
    id?: string;
    className?: string;
    click?: (e: any) => void; 
    mouseover?: (e: any) => void;
    slot_53_245?: React.ReactNode;
    slot_53_248?: React.ReactNode;
}

const Insertbutton = (props: InsertbuttonProps) => {
    const {
        insert_button_state,
        id,
        className = "",
        click, 
        mouseover,
        slot_53_245,
        slot_53_248
    } = props;

    // 🌟 1. Button3components와 완벽하게 동일한 두뇌(State) 장착!
    const [hoverState, setHoverState] = useState(insert_button_state || "default");

    return (
        <div
            className={`component-53_252 ${className}`}
            id={id}
            // 🌟 2. 마우스 액션에 따라 hoverState를 즉각 변경 (Button3과 동일)
            onMouseOver={mouseover ? withStopPropagation(mouseover) : undefined}
            onMouseEnter={() => setHoverState("checked")} // 마우스 들어오면 checked!
            onMouseLeave={() => setHoverState(insert_button_state || "default")} // 마우스 나가면 원래대로!
            onClick={click ? withStopPropagation(click) : undefined}
            style={{ cursor: "pointer" }} // 🌟 Button3에 있던 예쁜 손가락 커서까지 복사해왔습니다!
        >
            <div id="53_252" className="Pixso-symbol-53_252">
                
                {/* 🌟 3. 렌더링 기준을 insert_button_state에서 hoverState로 교체! */}
                {hoverState === "default" && (
                    <div id="53_251" className="stroke-wrapper-53_251">
                        <div className="Pixso-symbol-53_251">
                            {slot_53_245 ?? (
                                <p id="53_245" className="Pixso-paragraph-53_245">{"INSERT"}</p>
                            )}
                        </div>
                        <div className="stroke-53_251"></div>
                    </div>
                )}

                {hoverState === "checked" && (
                    <div id="53_250" className="stroke-wrapper-53_250">
                        <div className="Pixso-symbol-53_250">
                            {/* 불필요하게 중복되어 있던 조건문 청소 완료 */}
                            <div className="shadow-blend-unknown-0"></div>
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
