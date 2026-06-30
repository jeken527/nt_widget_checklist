import { OverlayManager } from "@/components/overlay";
import { withStopPropagation } from "@/utils/utils";
import Button3components from "@/components/Button3components";
import "@/styles/Frame63357.css";

// 🌟 1. 부모(Frame1019)가 전달하는 닫기 명령을 받을 이름표(Props)
interface Frame63357Props {
    onClose?: () => void;
}

const Frame63357 = (props: Frame63357Props) => {
    // 🌟 2. 부모가 준 닫기 함수 꺼내기
    const { onClose } = props;

    return (
        <div className="scroll-container">
            <div id="63_357" className="stroke-wrapper-63_357">
                <div className="Pixso-frame-63_357">
                    
                    {/* 🌟 팝업 바깥 어두운 배경 클릭 시 닫기 기능 */}
                    <div 
                        onClick={onClose} 
                        style={{ position: "absolute", top:0, left:0, width:"100%", height:"100%", zIndex: -1, cursor: "pointer" }}
                    ></div>

                    <div className="frame-content-63_357">
                        
                        {/* 🎯 상단 "SEARCH" 타이틀 및 닫기[X] 버튼 영역 */}
                        <div id="63_325" className="Pixso-frame-63_325">
                            <div className="frame-content-63_325">
                                <p id="63_327" className="Pixso-paragraph-63_327">
                                    {"SEARCH"}
                                </p>
                                <Button3components
                                    id="63_328"
                                    className="Pixso-instance-63_328"
                                    // 🌟 우리가 개조한 버튼 부품에 맞게 "click" 속성으로 닫기 연결!
                                    click={() => {
                                        if (onClose) onClose();
                                        OverlayManager.instance.close();
                                    }}
                                    button3state="default" // 고정된 스타일
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
