import React, { useState } from "react"; // 🌟 React와 useState 불러오기 추가
import { OverlayManager } from "@/components/overlay";
import { withStopPropagation } from "@/utils/utils";
import Button3components from "@/components/Button3components";
import Routinedataselect from "@/components/Routinedataselect";
import "@/styles/Frame6528.css";

interface Frame6528Props {
    routineList?: any[]; // 부모에게서 받는 전체 루틴 데이터 가방
    onClose?: () => void; // 닫기 명령
    onSelectDesc?: (desc: string) => void; // 선택한 텍스트를 위로 올려보내는 명령
}

const Frame6528 = (props: Frame6528Props) => {
    const { routineList = [], onClose, onSelectDesc } = props;
    
    // 🌟 --- 팝업창 이동(드래그)을 위한 위치 상태 및 함수 시작 ---
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        // 텍스트 드래그 방지 (마우스 잡았을 때 글씨가 파랗게 선택되는 현상 방지)
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
    // 🌟 --- 팝업창 이동(드래그) 함수 끝 ---

    // 똑같은 메모가 여러 개 뜨지 않도록 중복을 제거한 설명 목록을 만듭니다.
    const uniqueDescriptions = Array.from(new Set(routineList.map(r => r.description)));

    return (
        // 🌟 전체 컨테이너에 현재 position 만큼 화면을 이동시키는 style(transform) 추가
        <div 
            className="scroll-container"
            style={{ 
                transform: `translate(${position.x}px, ${position.y}px)`, 
                position: "relative", 
                zIndex: 9999 // 팝업이 항상 최상단에 오도록 보장
            }}
        >
            <div id="65_28" className="stroke-wrapper-65_28">
                <div className="Pixso-frame-65_28">
                    {/* 투명한 배경 클릭 시 팝업 닫기 */}
                    <div 
                        onClick={onClose} 
                        style={{ position: "absolute", top:0, left:0, width:"100%", height:"100%", zIndex: -1, cursor: "pointer" }}
                    ></div>

                    <div className="frame-content-65_28">
                        {/* 🌟 팝업 상단 "LIST" 타이틀 영역 (여기가 손잡이가 됩니다) */}
                        <div 
                            id="65_29" 
                            className="Pixso-frame-65_29"
                            onMouseDown={handleMouseDown} // 🌟 마우스를 누르면 이동 시작!
                            style={{ cursor: "move" }}    // 🌟 마우스를 올리면 십자화살표(이동) 커서로 변경
                        >
                            <div className="frame-content-65_29">
                                <p id="65_31" className="Pixso-paragraph-65_31">
                                    {"LIST"}
                                </p>
                                <Button3components
                                    id="65_32"
                                    className="Pixso-instance-65_32"
                                    // 우리가 개조했던 부품에 맞춰서 "click" 이라는 이름으로 닫기 명령을 내립니다!
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
