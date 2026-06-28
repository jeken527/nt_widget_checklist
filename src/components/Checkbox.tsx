import { useState } from "react"; // 🌟 React에서 상태를 기억하는 useState 불러오기
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
        checkbox_state,
        id,
        className = "",
        click, // (더 이상 부모의 반쪽짜리 click 명령에 의존하지 않습니다)
        slot_53_207,
        slot_53_208
    } = props;

    // 🌟 1. 체크박스 스스로 켜짐/꺼짐 상태를 기억하게 만듭니다. (초기값은 부모의 상태를 받음)
    const [isCheck, setIsCheck] = useState(checkbox_state === "checked");

    // 🌟 2. 클릭할 때마다 on/off 스위치처럼 상태를 뒤집는(Toggle) 함수
    const handleToggle = (e: any) => {
        setIsCheck(!isCheck);
    };

    // 🌟 3. 현재 스스로의 상태에 따라 모양을 결정합니다.
    const currentState = isCheck ? "checked" : "default";

    return (
        <div
            className={`component-53_214 ${className}`}
            id={id}
            onClick={withStopPropagation(handleToggle)} // 🌟 4. 부모 명령 대신 자체 토글 함수 연결
        >
            <div id="53_214" className="Pixso-symbol-53_214">
                {currentState === "default" && (
                    <div id="53_213" className="Pixso-symbol-53_213">
                        <div id="53_202" className="stroke-wrapper-53_202">
                            <div className="Pixso-rectangle-53_202"></div>
                            <div className="stroke-53_202"></div>
                        </div>
                    </div>
                )}
                {currentState === "checked" && (
                    <div id="53_212" className="stroke-wrapper-53_212">
                        <div className="Pixso-symbol-53_212">
                            {currentState === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
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
