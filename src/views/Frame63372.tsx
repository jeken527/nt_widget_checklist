import { OverlayManager } from "@/components/overlay";
import { withStopPropagation } from "@/utils/utils";
import Button3components from "@/components/Button3components";
import Routinedataselect from "@/components/Routinedataselect";
import "@/styles/Frame63372.css";

// 🌟 1. 부모(Frame1019)로부터 검색된 진짜 결과물만 받아올 이름표(Props)
interface Frame63372Props {
    close?: () => void; // 닫기 명령 (유저님의 기존 props 이름 유지)
    filteredRoutines?: any[]; // 부모가 솎아낸 검색 결과 배열
}

const Frame63372 = (props: Frame63372Props) => {
    // 🌟 2. 부모가 준 데이터 꺼내기 (배열이 비어있으면 빈 배열로 초기화)
    const { close, filteredRoutines = [] } = props;

    // 🌟 3. 중복된 이름(description) 제거 (같은 루틴이 여러 개 뜨면 안 되니까!)
    const uniqueDescriptions = Array.from(new Set(filteredRoutines.map(r => r.description)));

    return (
        <div className="scroll-container">
            <div id="63_372" className="stroke-wrapper-63_372">
                <div className="Pixso-frame-63_372">
                    
                    {/* 팝업 바깥 배경 클릭 시 닫기 (선택사항) */}
                    <div 
                        onClick={close} 
                        style={{ position: "absolute", top:0, left:0, width:"100%", height:"100%", zIndex: -1, cursor: "pointer" }}
                    ></div>

                    <div className="frame-content-63_372">
                        
                        {/* 🎯 상단 "SEARCH" 타이틀 및 닫기[X] 버튼 영역 (디자인 유지) */}
                        <div id="63_373" className="Pixso-frame-63_373">
                            <div className="frame-content-63_373">
                                <p id="63_375" className="Pixso-paragraph-63_375">
                                    {"SEARCH"}
                                </p>
                                <Button3components
                                    id="63_376"
                                    className="Pixso-instance-63_376"
                                    // 🌟 닫기 버튼을 누르면 부모의 close 함수를 실행하여 창을 닫습니다!
                                    click={() => {
                                        if (close) close();
                                        OverlayManager.instance.close();
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
                                        <div key={index} style={{ width: "100%" }}>
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
