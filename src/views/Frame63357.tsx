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

    return (
        <div className="scroll-container">
            <div id="63_372" className="stroke-wrapper-63_372">
                <div className="Pixso-frame-63_372">
                    
                    {/* 🌟 3. 배경 클릭 시 닫기도 onClose 연결 */}
                    <div 
                        onClick={onClose} // 👈 여기도 close를 onClose로 변경!
                        style={{ position: "absolute", top:0, left:0, width:"100%", height:"100%", zIndex: -1, cursor: "pointer" }}
                    ></div>

                    <div className="frame-content-63_372">
                        <div id="63_373" className="Pixso-frame-63_373">
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
