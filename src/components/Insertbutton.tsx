import React, { useState } from "react"; // 🌟 버튼 스스로 상태를 기억하도록 useState를 불러옵니다.
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
        insert_button_state = "default", // 기본값 설정
        id,
        className = "",
        click,
        mouseover,
        slot_53_245,
        slot_53_248
    } = props;

    // 🌟 [핵심 지능 추가] 버튼 스스로 마우스가 위에 있는지 기억합니다.
    const [isHovered, setIsHovered] = useState(false);

    // 🌟 마우스가 위에 있으면 "checked" 모양을, 아니면 원래 상태("default")를 보여줍니다.
    const currentState = isHovered ? "checked" : insert_button_state;

    return (
        <div
            className={`component-53_252 ${className}`}
            id={id}
            onClick={click ? withStopPropagation(click) : undefined}
            
            // 🌟 [마우스 통제 구역] 닿을 때, 나갈 때, 클릭 뗄 때 상태를 확실하게 복구시킵니다!
            onMouseEnter={() => setIsHovered(true)}       // 마우스 닿으면 -> checked 
            onMouseLeave={() => setIsHovered(false)}      // 마우스 나가면 -> default 복구
            onMouseUp={() => setIsHovered(false)}         // 클릭 떼면 -> default 복구
            
            onMouseOver={mouseover ? withStopPropagation(mouseover) : undefined}
        >
            <div id="53_252" className="Pixso-symbol-53_252">
                {/* 🌟 기존의 insert_button_state 대신, 똑똑해진 currentState를 적용합니다. */}
                {currentState === "default" && (
                    <div id="53_251" className="stroke-wrapper-53_251">
                        <div className="Pixso-symbol-53_251">
                            {slot_53_245 ?? (
                                <p id="53_245" className="Pixso-paragraph-53_245">{"INSERT"}</p>
                            )}
                        </div>
                        <div className="stroke-53_251"></div>
                    </div>
                )}
                {currentState === "checked" && (
                    <div id="53_250" className="stroke-wrapper-53_250">
                        <div className="Pixso-symbol-53_250">
                            {/* 불필요한 중복 조건문 제거 완료 */}
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
