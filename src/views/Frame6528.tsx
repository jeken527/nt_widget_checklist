import React, { useState } from "react"; 
import { OverlayManager } from "@/components/overlay";
import { withStopPropagation } from "@/utils/utils";
import Button3components from "@/components/Button3components";
import Routinedataselect from "@/components/Routinedataselect";
import "@/styles/Frame6528.css";

interface Frame6528Props {
    routineList?: any[]; 
    onClose?: () => void; 
    onSelectDesc?: (desc: string) => void; 
}

const Frame6528 = (props: Frame6528Props) => {
    const { routineList = [], onClose, onSelectDesc } = props;
    
    // --- 팝업창 이동(드래그)을 위한 위치 상태 및 함수 시작 ---
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault(); 
        
        const startX = e.clientX - position.x;
        const startY = e.clientY - position.y;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            setPosition({
                x: moveEvent.clientX - startX,
                y: moveEvent.clientY - startY,
            });
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const uniqueDescriptions = Array.from(new Set(routineList.map(r => r.description)));

    return (
        <div 
            className="scroll-container"
            style={{ 
                position: "fixed", // 🌟 스크롤과 상관없이 화면 전체를 덮도록 고정
                top: 0, 
                left: 0, 
                width: "100vw", 
                height: "100vh", 
                zIndex: 9999,
                display: "flex",          // 🌟 가로/세로 중앙 정렬 스위치 ON
                justifyContent: "center", // 🌟 가로 정중앙
                alignItems: "center",     // 🌟 세로 정중앙
            }}
        >
            {/* 🌟 투명한 배경 (고정): 클릭 시 팝업 닫기 (이제 드래그해도 배경은 안 움직입니다!) */}
            <div 
                onClick={onClose} 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, cursor: "pointer" }}
            ></div>

            {/* 🌟 2. 실제 팝업창 본체 (드래그 시 이 상자만 움직입니다!) */}
            <div id="65_28" className="stroke-wrapper-65_28"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`, // 🌟 마우스 이동 값(드래그)을 이쪽으로 옮겼습니다!
                    position: "relative",
                    zIndex: 1,
                    overflow: "hidden" // 🌟 아까 설치한 레이저 선 튀어나감 방지 감옥도 상자 본체에 적용!
                }}
            >
                <div className="Pixso-frame-65_28">
                    <div className="frame-content-65_28">
                        {/* 팝업 상단 "LIST" 타이틀 영역 (손잡이) */}
                        <div 
                            id="65_29" 
                            className="Pixso-frame-65_29"
                            onMouseDown={handleMouseDown} 
                            style={{ cursor: "move" }}    
                        >
                            <div className="frame-content-65_29">
                                <p id="65_31" className="Pixso-paragraph-65_31">
                                    {"LIST"}
                                </p>
                                <Button3components
                                    id="65_32"
                                    className="Pixso-instance-65_32"
                                    click={() => {
                                        if (onClose) onClose();
                                    }}
                                ></Button3components>
                            </div>
                        </div>

                        {/* 리스트 데이터 출력 영역 */}
                        <div id="65_34" className="stroke-wrapper-65_34">
                            <div className="Pixso-frame-65_34">
                                <div className="shadow-blend-unknown-0"></div>
                                <div className="frame-content-65_34" style={{ 
                                    display: "flex", 
                                    flexDirection: "column", 
                                    gap: "4px", 
                                    overflowY: "auto", 
                                    maxHeight: "150px", 
                                    width: "100%"
                                }}>
                                    
                                    {/* 루틴 기록이 1개도 없을 때 띄울 안내 메시지 */}
                                    {uniqueDescriptions.length === 0 && (
                                        <p style={{ textAlign: "center", color: "#888", fontSize: "12px", marginTop: "10px" }}>
                                            저장된 기록이 없습니다.
                                        </p>
                                    )}

                                    {/* 우리가 쓴 진짜 데이터만 반복문으로 쫙 뽑아냅니다. */}
                                    {uniqueDescriptions.map((desc, index) => (
                                        <div 
                                            key={index}
                                            onClick={() => {
                                                if (onSelectDesc) onSelectDesc(desc as string);
                                            }}
                                            style={{ cursor: "pointer", width: "100%" }}
                                        >
                                            <Routinedataselect
                                                id={`dynamic_list_${index}`}
                                                className="Pixso-instance-92_5435"
                                                routinedatastate="default"
                                                slot_63_393={
                                                    <p className="Pixso-paragraph-12_278" style={{ pointerEvents: "none" }}>
                                                        {desc}
                                                    </p>
                                                }
                                            ></Routinedataselect>
                                        </div>
                                    ))}
                                    
                                </div>
                            </div>
                            <div className="stroke-65_34"></div>
                        </div>
                    </div>
                </div>
                <div className="stroke-65_28"></div>
            </div>
        </div>
    );
};
export default Frame6528;
