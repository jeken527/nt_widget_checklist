import { OverlayManager } from "@/components/overlay";
import { withStopPropagation } from "@/utils/utils";
import Button3components from "@/components/Button3components";
import Routinedataselect from "@/components/Routinedataselect";
import "@/styles/Frame63372.css";

// 🌟 1. 부모(Frame1019)로부터 검색된 진짜 결과물만 받아올 이름표(Props)
interface Frame63372Props {
    onclose?: () => void; // 닫기 명령 (유저님의 기존 props 이름 유지)
    filteredRoutines?: any[]; // 부모가 솎아낸 검색 결과 배열
    onSelectRoutine?: (description: string) => void;
}

const Frame63372 = (props: Frame63372Props) => {
    // 🌟 2. 부모가 준 데이터 꺼낼 때도 'onClose'로 꺼내기
    const { onClose, filteredRoutines = [] } = props; // 👈 여기도 close를 onClose로 변경!

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

                        {/* 🎯 하단 동적 리스트 영역 (더미 데이터 삭제 및 자동 생성) */}
                        <div id="63_391" className="stroke-wrapper-63_391">
                            <div className="Pixso-frame-63_391">
                                <div className="shadow-blend-unknown-0"></div>
                                
                                <div className="frame-content-63_391" style={{ 
                                    display: "flex", 
                                    flexDirection: "column", 
                                    gap: "4px", // 결과 간격
                                    overflowY: "auto", // 결과가 많을 때 스크롤
                                    maxHeight: "150px", // 팝업 길이 제한
                                    width: "100%"
                                }}>
                                    
                                    {/* 🌟 진짜 검색 결과만 반복문으로 쫙 뽑아냅니다. */}
                                    {uniqueDescriptions.map((desc, index) => (
                                        <div key={index} style={{ width: "100%", cursor: "pointer"}}>
                                            onClick={() => {
                                                if (props.onSelectRoutine) props.onSelectRoutine(desc as string);
                                                if (props.onClose) props.onClose();
                                            }}
                                            <Routinedataselect
                                                id={`search_result_${index}`}
                                                className="Pixso-instance-63_402" // 기존 클래스명 활용
                                                routinedatastate="default"
                                                slot_63_393={
                                                    <p className="Pixso-paragraph-12_516" style={{ pointerEvents: "none" }}>
                                                        {desc as string}
                                                    </p>
                                                }
                                            ></Routinedataselect>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="stroke-63_391"></div>
                        </div>
                    </div>
                </div>
                <div className="stroke-63_372"></div>
            </div>
        </div>
    );
};
export default Frame63372;
