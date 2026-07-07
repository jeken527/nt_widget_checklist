import React, { useState } from "react"; // 🌟 React와 useState 불러오기 추가
import { OverlayManager } from "@/components/overlay";
import { withStopPropagation } from "@/utils/utils";
import Button3components from "@/components/Button3components";
import "@/styles/Frame63357.css";

// 🌟 1. 부모(Frame1019)가 전달하는 닫기 명령을 받을 이름표(Props)
interface Frame63357Props {
    onClose?: () => void;
    filteredRoutines?: any[]; 
}

const Frame63357 = (props: Frame63357Props) => {
    // 🌟 2. 부모가 준 닫기 함수 꺼내기
    const { onClose, filteredRoutines = [] } = props;
    const uniqueDescriptions = Array.from(new Set(filteredRoutines.map(r => r.description)));

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
            <div id="63_372" className="stroke-wrapper-63_372">
                <div className="Pixso-frame-63_372">
                    
                    {/* 🌟 3. 배경 클릭 시 닫기도 onClose 연결 */}
                    <div 
                        onClick={onClose} // 👈 여기도 close를 onClose로 변경!
                        style={{ position: "absolute", top:0, left:0, width:"100%", height:"100%", zIndex: -1, cursor: "pointer" }}
                    ></div>

                    <div className="frame-content-63_372">
                        
                        {/* 🎯 상단 "SEARCH" 타이틀 영역 (여기가 손잡이가 됩니다) */}
                        <div 
                            id="63_373" 
                            className="Pixso-frame-63_373"
                            onMouseDown={handleMouseDown} // 🌟 마우스를 누르면 이동 시작!
                            style={{ cursor: "move" }}    // 🌟 마우스를 올리면 십자화살표(이동) 커서로 변경
                        >
                            <div className="frame-content-63_373">
                                <p id="63_375" className="Pixso-paragraph-63_375">
                                    {"SEARCH"}
                                </p>
                                <Button3components
                                    id="63_376"
                                    className="Pixso-instance-63_376"
                                    
                                    // 🌟 4. [X] 버튼 클릭 시 닫기도 onClose 연결!
                                    click={() => {
                                        if (onClose) onClose(); // 👈 여기도 close를 onClose로 변경!
                                    }}
                                ></Button3components>
                            </div>
                        </div>
                        
                        {/* 🎯 하단 "NO RESULT" 텍스트 영역 */}
                        <div id="63_330" className="Pixso-frame-63_330">
                            <div className="frame-content-63_330">
                                <p id="63_331" className="Pixso-paragraph-63_331">
                                    {"NO RESULT"} {/* 원본의 숫자 0(N0)을 알파벳 O(NO)로 살짝 교정해 두었습니다! */}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="stroke-63_357"></div>
            </div>
        </div>
    );
};
export default Frame63357;
