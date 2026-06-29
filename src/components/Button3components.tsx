import { useState } from "react"; // 🌟 마우스 상태를 기억하기 위해 useState 추가
import { withStopPropagation } from "@/utils/utils";
import "@/styles/Button3components.css";

interface Button3componentsProps {
    button3state?: string;
    id?: string;
    className?: string;
    onClick65_3263_311139_132?: (e: any) => void;
    onClick65_3263_311135_151?: (e: any) => void;
    onClick63_32863_311139_132?: (e: any) => void;
    onClick63_32863_311135_151?: (e: any) => void;
    onClick63_37663_311139_132?: (e: any) => void;
    onClick63_37663_311135_151?: (e: any) => void;
    mouseover?: (e: any) => void;
    click?: (e: any) => void; // 🌟 우리가 만든 '닫기(close)' 명령을 받을 구멍 추가
    slot_63_313?: React.ReactNode;
    slot_63_314?: React.ReactNode;
    slot_63_317?: React.ReactNode;
    slot_63_318?: React.ReactNode;
}

const Button3components = (props: Button3componentsProps) => {
    const {
        button3state,
        id,
        className = "",
        onClick65_3263_311139_132,
        onClick65_3263_311135_151,
        onClick63_32863_311139_132,
        onClick63_32863_311135_151,
        onClick63_37663_311139_132,
        onClick63_37663_311135_151,
        mouseover,
        click, // 🌟 props에서 click 꺼내기
        slot_63_313,
        slot_63_314,
        slot_63_317,
        slot_63_318
    } = props;

    // 🌟 버튼이 스스로 마우스 오버 상태를 인지하도록 두뇌(State) 장착!
    // 부모가 "checked"라고 강제한 곳이 아니라면 기본적으로 "default" 상태로 시작합니다.
    const [hoverState, setHoverState] = useState(button3state || "default");

    return (
        <div
            className={`component-63_310 ${className}`}
            id={id}
            onMouseOver={mouseover ? withStopPropagation(mouseover) : undefined}
            onMouseEnter={() => setHoverState("checked")} // 🌟 마우스가 들어오면 모양을 checked로 변경
            onMouseLeave={() => setHoverState(button3state || "default")} // 🌟 마우스가 나가면 원래 상태로 복귀
            onClick={click ? withStopPropagation(click) : undefined} // 🌟 버튼을 눌렀을 때 부모의 close 함수를 실행!
            style={{ cursor: "pointer" }} // 버튼답게 손가락 커서 띄우기
        >
            <div id="63_310" className="Pixso-symbol-63_310">
                {/* 🌟 기존 button3state 대신, 스스로 인지하는 hoverState를 기준으로 렌더링합니다 */}
                {hoverState === "default" && (
                    <div id="63_311" className="stroke-wrapper-63_311">
                        <div
                            className="Pixso-symbol-63_311"
                            onClick={
                                onClick63_37663_311135_151 ||
                                onClick63_37663_311139_132 ||
                                onClick63_32863_311135_151 ||
                                onClick63_32863_311139_132 ||
                                onClick65_3263_311135_151 ||
                                onClick65_3263_311139_132 ||
                                onClick65_3263_311135_151 ||
                                onClick65_3263_311139_132 ||
                                onClick65_3263_311135_151 ||
                                onClick65_3263_311139_132
                            }
                        >
                            <div id="63_312" className="Pixso-frame-63_312">
                                {slot_63_313 ?? (
                                    <div
                                        id="63_313"
                                        className="Pixso-vector-63_313"
                                    ></div>
                                )}
                                {slot_63_314 ?? (
                                    <div
                                        id="63_314"
                                        className="Pixso-vector-63_314"
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="stroke-63_311"></div>
                    </div>
                )}
                {hoverState === "checked" && (
                    <div id="63_315" className="stroke-wrapper-63_315">
                        <div className="Pixso-symbol-63_315">
                            {hoverState === "checked" && (
                                <div className="shadow-blend-unknown-0"></div>
                            )}
                            <div id="63_316" className="Pixso-frame-63_316">
                                {slot_63_317 ?? (
                                    <div
                                        id="63_317"
                                        className="Pixso-vector-63_317"
                                    ></div>
                                )}
                                {slot_63_318 ?? (
                                    <div
                                        id="63_318"
                                        className="Pixso-vector-63_318"
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="stroke-63_315"></div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Button3components;
