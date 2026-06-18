import type { BarPosition, ConnectionType, MarkerConnection, ConnectionRelation, ConnectionLabelStyle } from "../types";
interface Props {
    sourceBar: BarPosition;
    targetBar: BarPosition;
    type?: ConnectionType;
    color?: string;
    strokeWidth?: number;
    pattern?: "solid" | "dash" | "dot" | "dashdot";
    animated?: boolean;
    animationSpeed?: "slow" | "normal" | "fast";
    marker: MarkerConnection;
    isSelected?: boolean;
    relation?: ConnectionRelation;
    label?: string;
    labelAlwaysVisible?: boolean;
    labelStyle?: ConnectionLabelStyle;
}
declare const __VLS_export: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{}>, {
    label: string;
    labelStyle: ConnectionLabelStyle;
    type: ConnectionType;
    color: string;
    pattern: "solid" | "dash" | "dot" | "dashdot";
    animated: boolean;
    animationSpeed: "slow" | "normal" | "fast";
    relation: ConnectionRelation;
    labelAlwaysVisible: boolean;
    strokeWidth: number;
    isSelected: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
