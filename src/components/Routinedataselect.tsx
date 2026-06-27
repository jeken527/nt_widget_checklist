import { withStopPropagation } from "@/utils/utils";
import "@/styles/Routinedataselect.css";
interface RoutinedataselectProps {
    routinedatastate?: string;
    routineselect?: string;
    id?: string;
    className?: string;
    onClick92_543563_39992_5444?: (e: any) => void;
    onClick92_544163_39992_5445?: (e: any) => void;
    onClick92_543863_39992_5446?: (e: any) => void;
    onClick92_542963_39992_5449?: (e: any) => void;
    onClick92_543263_39992_5451?: (e: any) => void;
    onClick92_542663_39992_5448?: (e: any) => void;
    onClick92_541763_39992_5452?: (e: any) => void;
    onClick92_542363_39992_5447?: (e: any) => void;
    onClick92_542063_39992_5453?: (e: any) => void;
    onClick92_541463_39992_5450?: (e: any) => void;
    onClick92_541163_39992_5454?: (e: any) => void;
    onClick92_541163_39992_5451?: (e: any) => void;
    onClick92_541163_39992_5449?: (e: any) => void;
    onClick92_541163_39992_5446?: (e: any) => void;
    onClick92_541163_39992_5444?: (e: any) => void;
    onClick92_541163_39992_5452?: (e: any) => void;
    onClick92_541163_39992_5445?: (e: any) => void;
    onClick92_541163_39992_5453?: (e: any) => void;
    onClick92_541163_39992_5450?: (e: any) => void;
    onClick92_541163_39992_5447?: (e: any) => void;
    onClick92_541163_39992_5448?: (e: any) => void;
    onClick92_541163_39963_406?: (e: any) => void;
    onClick63_40263_39963_406?: (e: any) => void;
    onClick73_496263_39963_406?: (e: any) => void;
    onClick73_496563_39963_406?: (e: any) => void;
    onClick73_496863_39963_406?: (e: any) => void;
    onClick73_497063_39963_406?: (e: any) => void;
    onClick73_497263_39963_406?: (e: any) => void;
    onClick73_497463_39963_406?: (e: any) => void;
    mouseover?: (e: any) => void;
    slot_63_393?: React.ReactNode;
    slot_63_396?: React.ReactNode;
}
const Routinedataselect = (props: RoutinedataselectProps) => {
    const {
        routinedatastate,
        routineselect,
        id,
        className = "",
        onClick92_543563_39992_5444,
        onClick92_544163_39992_5445,
        onClick92_543863_39992_5446,
        onClick92_542963_39992_5449,
        onClick92_543263_39992_5451,
        onClick92_542663_39992_5448,
        onClick92_541763_39992_5452,
        onClick92_542363_39992_5447,
        onClick92_542063_39992_5453,
        onClick92_541463_39992_5450,
        onClick92_541163_39992_5454,
        onClick92_541163_39992_5451,
        onClick92_541163_39992_5449,
        onClick92_541163_39992_5446,
        onClick92_541163_39992_5444,
        onClick92_541163_39992_5452,
        onClick92_541163_39992_5445,
        onClick92_541163_39992_5453,
        onClick92_541163_39992_5450,
        onClick92_541163_39992_5447,
        onClick92_541163_39992_5448,
        onClick92_541163_39963_406,
        onClick63_40263_39963_406,
        onClick73_496263_39963_406,
        onClick73_496563_39963_406,
        onClick73_496863_39963_406,
        onClick73_497063_39963_406,
        onClick73_497263_39963_406,
        onClick73_497463_39963_406,
        mouseover,
        slot_63_393,
        slot_63_396
    } = props;

    return (
        <div
            className={`component-63_400 ${className}`}
            id={id}
            onMouseover={withStopPropagation(mouseover)}
        >
            <div id="63_400" className="Pixso-symbol-63_400">
                {routinedatastate === "default" && (
                    <div
                        id="63_399"
                        className="Pixso-symbol-63_399"
                        onClick={
                            onClick73_497463_39963_406 ||
                            onClick73_497263_39963_406 ||
                            onClick73_497063_39963_406 ||
                            onClick73_496863_39963_406 ||
                            onClick73_496563_39963_406 ||
                            onClick73_496263_39963_406 ||
                            onClick63_40263_39963_406 ||
                            onClick92_541163_39963_406 ||
                            onClick92_541163_39963_406 ||
                            onClick92_541163_39963_406 ||
                            onClick92_541163_39963_406 ||
                            onClick92_541163_39963_406 ||
                            onClick92_541163_39963_406 ||
                            onClick92_541163_39963_406 ||
                            onClick92_541163_39992_5448 ||
                            onClick92_541163_39992_5447 ||
                            onClick92_541163_39992_5450 ||
                            onClick92_541163_39992_5453 ||
                            onClick92_541163_39992_5445 ||
                            onClick92_541163_39992_5452 ||
                            onClick92_541163_39992_5444 ||
                            onClick92_541163_39992_5446 ||
                            onClick92_541163_39992_5449 ||
                            onClick92_541163_39992_5451 ||
                            onClick92_541163_39992_5454 ||
                            onClick92_541463_39992_5450 ||
                            onClick92_542063_39992_5453 ||
                            onClick92_542363_39992_5447 ||
                            onClick92_541763_39992_5452 ||
                            onClick92_542663_39992_5448 ||
                            onClick92_543263_39992_5451 ||
                            onClick92_542963_39992_5449 ||
                            onClick92_543863_39992_5446 ||
                            onClick92_544163_39992_5445 ||
                            onClick92_543563_39992_5444
                        }
                    >
                        {slot_63_393 ?? (
                            <p id="63_393" className="Pixso-paragraph-63_393">
                                {"데이터 정리하기"}
                            </p>
                        )}
                    </div>
                )}
                {routinedatastate === "checked" && (
                    <div id="63_398" className="Pixso-symbol-63_398">
                        {slot_63_396 ?? (
                            <p id="63_396" className="Pixso-paragraph-63_396">
                                {"데이터 정리하기"}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Routinedataselect;
