import React, { useState } from "react";
import { withStopPropagation } from "@/utils/utils";
import "@/styles/Serchbutton.css";

interface SerchbuttonProps {
    search_button_state?: string;
    searchbutton?: string; // 원본 Props 완벽 복원
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

    // 🌟 완전 독립적인 마우스 호버 지능 탑재
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`component-55_283 ${className}`}
            id={id}
            onMouseOver={mouseover ? withStopPropagation(mouseover) : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(e) => {
                // 🌟 클릭(팝업 호출) 즉시 호버를 풀어버려서 굳는 현상 방지!
                setIsHovered(false); 
                if (click) withStopPropagation(click)(e);
            }}
            style={{ cursor: "pointer" }}
        >
            <div id="55_283" className="Pixso-symbol-55_283">
                {/* 🌟 1. default 상태 돋보기 (원본 디자인 복구 완료) */}
                {!isHovered && (
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

                {/* 🌟 2. checked 상태 돋보기 (원본 디자인 복구 완료) */}
                {isHovered && (
                    <div id="55_281" className="stroke-wrapper-55_281">
                        <div className="Pixso-symbol-55_281">
                            <div className="shadow-blend-unknown-0"></div>
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
