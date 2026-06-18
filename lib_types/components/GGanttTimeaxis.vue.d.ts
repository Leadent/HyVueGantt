import type { TimeaxisData, TimeaxisUnit, TimeUnit, TimeaxisEvent } from "@/types";
type __VLS_Props = {
    timeaxisUnits: TimeaxisData;
    internalPrecision: TimeUnit;
};
declare var __VLS_1: {
    label: string;
    value: string | undefined;
    date: Date;
}, __VLS_3: {
    label: string;
    value: string | undefined;
    date: Date;
}, __VLS_5: {
    event: {
        calculatedWidth: string;
        calculatedX: number;
        id: string;
        label: string;
        startDate: string | Date;
        endDate: string | Date;
        color?: string;
        backgroundColor?: string;
        description?: string;
        width?: string;
        xPosition?: number;
    };
}, __VLS_14: {
    unit: TimeaxisUnit;
}, __VLS_23: {
    event: TimeaxisEvent;
    formatDate: (date: string | Date) => string | Date;
};
type __VLS_Slots = {} & {
    'upper-timeunit'?: (props: typeof __VLS_1) => any;
} & {
    timeunit?: (props: typeof __VLS_3) => any;
} & {
    'timeaxis-event'?: (props: typeof __VLS_5) => any;
} & {
    'holiday-tooltip'?: (props: typeof __VLS_14) => any;
} & {
    'event-tooltip'?: (props: typeof __VLS_23) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {
    timeaxisElement: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    drag: (value: MouseEvent) => any;
    dragStart: (value: MouseEvent) => any;
    dragEnd: (value: MouseEvent) => any;
    "click-event": (value: TimeaxisEvent) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDrag?: ((value: MouseEvent) => any) | undefined;
    onDragStart?: ((value: MouseEvent) => any) | undefined;
    onDragEnd?: ((value: MouseEvent) => any) | undefined;
    "onClick-event"?: ((value: TimeaxisEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
