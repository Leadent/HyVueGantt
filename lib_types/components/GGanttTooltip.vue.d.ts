import type { GanttBarObject, TimeaxisEvent, TimeaxisUnit } from "../types";
type __VLS_Props = {
    modelValue: boolean;
    type: "bar" | "event" | "holiday";
    bar?: GanttBarObject;
    event?: TimeaxisEvent;
    unit?: TimeaxisUnit;
    targetElement?: HTMLElement | null;
};
declare var __VLS_13: {
    bar: GanttBarObject;
    barStart: any;
    barEnd: any;
    barStartPlanned: string | Date | undefined;
    barEndPlanned: string | Date | undefined;
}, __VLS_15: {
    event: TimeaxisEvent;
    formatDate: (date: string | Date) => string | Date;
}, __VLS_17: {
    unit: TimeaxisUnit;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_13) => any;
} & {
    'event-tooltip'?: (props: typeof __VLS_15) => any;
} & {
    'holiday-tooltip'?: (props: typeof __VLS_17) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
