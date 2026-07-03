import { OverlayManager } from "@/components/overlay";
import Button3components from "@/components/Button3components";
import Routinedataselect from "@/components/Routinedataselect";
import "@/styles/Frame63372.css";

// 🌟 1. 부모(Frame1019)로부터 필요한 택배 이름표(Props) 정의
interface Frame63372Props {
    onClose?: () => void;           // 팝업 창 닫기 함수
    filteredRoutines?: any[];       // 검색된 결과 루틴 배열
    onSelectRoutine?: (description: string) => void; // 루틴 선택 시 부모에게 전달할 함수
}

const Frame63372 = (props: Frame63372Props) => {
    // 🌟 2. 부모가 준 데이터와 함수들을 안전하게 꺼내기
    const { onClose, filteredRoutines = [], onSelectRoutine } = props;

    // 🌟 3. 중복된 이름(description) 제거
    const uniqueDescriptions = Array.from(new Set(filteredRoutines.map(r => r.description)));

    return (
        <div className="scroll-container">
            <div id="63_372" className="stroke-wrapper-63_372">
                <div className="Pixso-frame-63_372">
                    
                    {/* 팝업 바깥 배경 클릭 시 닫기 */}
                    <div 
                        onClick={onClose} 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, cursor: "pointer" }}
                    ></div>

                    <div className="frame-content-63_372">
                        
                        {/* 🎯 상단 "SEARCH" 타이틀 및 닫기[X] 버튼 영역 */}
                        <div id="63_373" className="Pixso-frame-63_373">
                            <div className="frame-content-63_373">
                                <p id="63_375" className="Pixso-paragraph-63_375">
                                    {"SEARCH"}
                                </p>
                                <Button3components
                                    id="63_376"
                                    className="Pixso-instance-63_376"
                                    click={() => {
                                        if (onClose) onClose();
                                        OverlayManager.instance.close();
                                    }}
                                ></Button3components>
                            </div>
                        </div>

                        {/* 🎯 하단 동적 리스트 영역 */}
                        <div id="63_391" className="stroke-wrapper-63_391">
                            <div className="Pixso-frame-63_391">
                                <div className="shadow-blend-unknown-0"></div>
                                
                                <div className="frame-content-63_391" style={{ 
                                    display: "flex", 
                                    flexDirection: "column", 
                                    gap: "4px", 
                                    overflowY: "auto", 
                                    maxHeight: "150px", 
                                    width: "220px"
                                }}>
                                    
                                    {/* 🌟 진짜 검색 결과만 반복문으로 정밀 출력 */}
                                    {uniqueDescriptions.map((desc, index) => (
                                        <div 
                                            key={index} 
                                            style={{ width: "100%", cursor: "pointer", display: "block" }}
                                            /* 🌟 [클릭 핵심 가방] 여기서 클릭 이벤트를 완벽하게 가로채 부모 통제실로 보냅니다! */
                                            onClick={() => {
                                                if (onSelectRoutine) onSelectRoutine(desc as string); // 부모 가방에 이름 꽂기
                                                if (onClose) onClose(); // 팝업창 닫기
                                            }}
                                        >
                                            {/* 내부 부품의 마우스 간섭을 pointerEvents: "none"으로 완전히 잠가서 
                                                위쪽 div의 onClick이 무조건 발동되도록 안전장치를 걸었습니다. */}
                                            <div style={{ pointerEvents: "none" }}>
                                                <Routinedataselect
                                                    id={`search_result_${index}`}
                                                    className="Pixso-instance-63_402"
                                                    routinedatastate="default"
                                                    slot_63_393={
                                                        /* 🌟 오타 청소 완료: 오직 글자(desc)만 깨끗하게 출력되도록 수정 */
                                                        <p className="Pixso-paragraph-12_516" style={{ margin: 0 }}>
                                                            {desc as string}
                                                        </p>
                                                    }
                                                />
                                            </div>
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
