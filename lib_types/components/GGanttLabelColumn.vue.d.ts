import type { ChartRow, RowDragEvent } from "../types";
export interface LabelColumnRowProps extends ChartRow {
    indentLevel?: number;
}
declare var __VLS_2: `label-column-title-${string}`, __VLS_3: {}, __VLS_16: `label-column-${string}-group`, __VLS_17: {
    row: LabelColumnRowProps;
    value: string | number | Date;
}, __VLS_20: `label-column-${string}`, __VLS_21: {
    row: LabelColumnRowProps;
    value: string | number | Date;
}, __VLS_24: `label-column-${string}`, __VLS_25: {
    row: LabelColumnRowProps;
    value: string | number | Date;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
} & {
    [K in NonNullable<typeof __VLS_16>]?: (props: typeof __VLS_17) => any;
} & {
    [K in NonNullable<typeof __VLS_20>]?: (props: typeof __VLS_21) => any;
} & {
    [K in NonNullable<typeof __VLS_24>]?: (props: typeof __VLS_25) => any;
};
declare const __VLS_base: import("vue").DefineComponent<{}, {
    setScroll: (value: number) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    scroll: (value: number) => any;
    "row-drop": (value: RowDragEvent) => any;
}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{
    onScroll?: ((value: number) => any) | undefined;
    "onRow-drop"?: ((value: RowDragEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
