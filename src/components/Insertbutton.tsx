import React, { useState } from "react";
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

    // 🌟 완전 독립적인 마우스 호버 지능 탑재
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`component-53_252 ${className}`}
            id={id}
            onMouseOver={mouseover ? withStopPropagation(mouseover) : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => {
                // 🌟 핵심 해결: 클릭하는 즉시 버튼을 원래 모양으로 강제 리셋합니다!
                setIsHovered(false); 
                if (click) withStopPropagation(click)(e);
            }}
            style={{ cursor: "pointer" }}
        >
            <div id="53_252" className="Pixso-symbol-53_252">
                {!isHovered && (
                    <div id="53_251" className="stroke-wrapper-53_251">
                        <div className="Pixso-symbol-53_251">
                            {slot_53_245 ?? (
                                <p id="53_245" className="Pixso-paragraph-53_245">{"INSERT"}</p>
                            )}
                        </div>
                        <div className="stroke-53_251"></div>
                    </div>
                )}
                {isHovered && (
                    <div id="53_250" className="stroke-wrapper-53_250">
                        <div className="Pixso-symbol-53_250">
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
