import type { GanttBarConnection, GanttBarObject } from "../types";
import type { RangeSelectionEvent } from "../types";
type __VLS_Props = {
    label: string;
    bars: GanttBarObject[];
    highlightOnHover?: boolean;
    id: string | number;
    children?: {
        id: string | number;
        label: string;
        bars: GanttBarObject[];
        connections?: GanttBarConnection[];
    }[];
    connections?: GanttBarConnection[];
    groupStartDate?: string | Date;
    groupEndDate?: string | Date;
};
declare var __VLS_6: {}, __VLS_22: string, __VLS_23: any, __VLS_35: string, __VLS_36: any, __VLS_50: {
    startDate: string | Date;
    endDate: string | Date;
    formattedStartDate: string | Date;
    formattedEndDate: string | Date;
    tick: number;
    tickEnabled: boolean | 0;
    tickUnit: string;
    internalPrecision: import("../types").TimeUnit;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_22>]?: (props: typeof __VLS_23) => any;
} & {
    [K in NonNullable<typeof __VLS_35>]?: (props: typeof __VLS_36) => any;
} & {
    label?: (props: typeof __VLS_6) => any;
} & {
    'range-selection-tooltip'?: (props: typeof __VLS_50) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "range-selection": (value: RangeSelectionEvent) => any;
    drop: (value: {
        e: MouseEvent;
        datetime: string | Date;
    }) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onRange-selection"?: ((value: RangeSelectionEvent) => any) | undefined;
    onDrop?: ((value: {
        e: MouseEvent;
        datetime: string | Date;
    }) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
