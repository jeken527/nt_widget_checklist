import { withStopPropagation } from "@/utils/utils";
import "@/styles/Checkbox.css";

interface CheckboxProps {
    checkbox?: string;
    checkbox_state?: string;
    id?: string;
    className?: string;
    click?: (e: any) => void;
    slot_53_207?: React.ReactNode;
    slot_53_208?: React.ReactNode;
}

const Checkbox = (props: CheckboxProps) => {
    const {
        checkbox,
        checkbox_state = "default", // 🌟 기본값을 default로 설정
        id,
        className = "",
        click, // 부모가 넘겨주는 진짜 클릭 리모컨
        slot_53_207,
        slot_53_208
    } = props;

    // 🗑️ [삭제됨] 체크박스가 혼자 고집부리던 내부 상태(useState, handleToggle)를 완전히 없앴습니다!
    // 🌟 이제 이 체크박스는 부모(Menutab)가 넘겨주는 checkbox_state 값만 맹목적으로 따릅니다.

    return (
        <div
            className={`component-53_214 ${className}`}
            id={id}
            // 🌟 부모가 click을 줬다면 그걸 실행하고, 아니면 아무것도 안 합니다.
            onClick={click ? withStopPropagation(click) : undefined} 
            style={{ cursor: "pointer" }}
        >
            <div id="53_214" className="Pixso-symbol-53_214">
                
                {/* 🌟 기존 currentState 대신, 부모가 준 checkbox_state를 봅니다 */}
                {checkbox_state === "default" && (
                    <div id="53_213" className="Pixso-symbol-53_213">
                        <div id="53_202" className="stroke-wrapper-53_202">
                            <div className="Pixso-rectangle-53_202"></div>
                            <div className="stroke-53_202"></div>
                        </div>
                    </div>
                )}

                {/* 🌟 부모가 "checked"라고 하면 V자 모양을 그립니다 */}
                {checkbox_state === "checked" && (
                    <div id="53_212" className="stroke-wrapper-53_212">
                        <div className="Pixso-symbol-53_212">
                            <div className="shadow-blend-unknown-0"></div>
                            <div id="53_206" className="Pixso-frame-53_206">
                                {slot_53_207 ?? (
                                    <div
                                        id="53_207"
                                        className="Pixso-vector-53_207"
                                    ></div>
                                )}
                                {slot_53_208 ?? (
                                    <div
                                        id="53_208"
                                        className="Pixso-vector-53_208"
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="stroke-53_212"></div>
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default Checkbox;
