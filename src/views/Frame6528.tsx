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
    
    // 🌟 똑같은 메모가 여러 개 뜨지 않도록 중복을 제거한 설명 목록을 만듭니다.
    const uniqueDescriptions = Array.from(new Set(routineList.map(r => r.description)));

    return (
        <div className="scroll-container">
            <div id="65_28" className="stroke-wrapper-65_28">
                <div className="Pixso-frame-65_28">
                    {/* 투명한 배경 클릭 시 팝업 닫기 (선택사항, 필요 없으면 div 지우셔도 됩니다) */}
                    <div 
                        onClick={onClose} 
                        style={{ position: "absolute", top:0, left:0, width:"100%", height:"100%", zIndex: -1, cursor: "pointer" }}
                    ></div>

                    <div className="frame-content-65_28">
                        {/* 🌟 팝업 상단 "LIST" 타이틀 및 닫기[X] 버튼 영역 (기존 디자인 유지) */}
                        <div id="65_29" className="Pixso-frame-65_29">
                            <div className="frame-content-65_29">
                                <p id="65_31" className="Pixso-paragraph-65_31">
                                    {"LIST"}
                                </p>
                                <Button3components
                                    id="65_32"
                                    className="Pixso-instance-65_32"
                                    // 🌟 우리가 개조했던 부품에 맞춰서 "click" 이라는 이름으로 닫기 명령을 내립니다!
                                    click={() => {
                                        if (onClose) onClose();
                                    }}
                                ></Button3components>
                            </div>
                        </div>

                        {/* 🌟 리스트 데이터 출력 영역 (기존 더미는 다 지우고 동적으로 생성) */}
                        <div id="65_34" className="stroke-wrapper-65_34">
                            <div className="Pixso-frame-65_34">
                                <div className="shadow-blend-unknown-0"></div>
                                <div className="frame-content-65_34" style={{ 
                                    display: "flex", 
                                    flexDirection: "column", 
                                    gap: "4px", // 리스트 사이 간격
                                    overflowY: "auto", // 스크롤바 생성
                                    maxHeight: "150px", // 팝업이 너무 길어지지 않게 방어선 구축
                                    width: "100%"
                                }}>
                                    
                                    {/* 루틴 기록이 1개도 없을 때 띄울 안내 메시지 */}
                                    {uniqueDescriptions.length === 0 && (
                                        <p style={{ textAlign: "center", color: "#888", fontSize: "12px", marginTop: "10px" }}>
                                            저장된 기록이 없습니다.
                                        </p>
                                    )}

                                    {/* 🌟 우리가 쓴 진짜 데이터만 반복문으로 쫙 뽑아냅니다. */}
                                    {uniqueDescriptions.map((desc, index) => (
                                        // 기존 Routinedataselect 컴포넌트를 재활용하여 일관된 디자인 유지!
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
