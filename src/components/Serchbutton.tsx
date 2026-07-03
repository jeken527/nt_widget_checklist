import React, { useState } from "react";
import { withStopPropagation } from "@/utils/utils";
import "@/styles/Serchbutton.css";

interface SerchbuttonProps {
    serch_button_state?: string;
    id?: string;
    className?: string;
    click?: (e: any) => void;
    mouseover?: (e: any) => void;
    slot_63_352?: React.ReactNode;
    slot_63_353?: React.ReactNode;
}

const Serchbutton = (props: SerchbuttonProps) => {
    const {
        serch_button_state,
        id,
        className = "",
        click,
        mouseover,
        slot_63_352,
        slot_63_353
    } = props;

    // 🌟 완전 독립적인 마우스 호버 지능 탑재
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`component-63_356 ${className}`}
            id={id}
            onMouseOver={mouseover ? withStopPropagation(mouseover) : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => {
                // 🌟 핵심 해결: 클릭(팝업 호출) 즉시 호버를 풀어버립니다!
                setIsHovered(false); 
                if (click) withStopPropagation(click)(e);
            }}
            style={{ cursor: "pointer" }}
        >
            <div id="63_356" className="Pixso-symbol-63_356">
                {!isHovered && (
                    <div id="63_355" className="stroke-wrapper-63_355">
                        <div className="Pixso-symbol-63_355">
                            {slot_63_352 ?? (
                                <div id="63_352" className="Pixso-vector-63_352"></div>
                            )}
                        </div>
                        <div className="stroke-63_355"></div>
                    </div>
                )}
                {isHovered && (
                    <div id="63_354" className="stroke-wrapper-63_354">
                        <div className="Pixso-symbol-63_354">
                            <div className="shadow-blend-unknown-0"></div>
                            {slot_63_353 ?? (
                                <div id="63_353" className="Pixso-vector-63_353"></div>
                            )}
                        </div>
                        <div className="stroke-63_354"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Serchbutton;
