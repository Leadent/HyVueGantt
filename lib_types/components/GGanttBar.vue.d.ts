import type { GanttBarObject } from "../types";
type __VLS_Props = {
    bar: GanttBarObject;
};
declare var __VLS_1: {
    width: number;
    height: number;
    bar: GanttBarObject;
}, __VLS_3: {
    bar: GanttBarObject;
}, __VLS_5: {
    bar: GanttBarObject;
};
type __VLS_Slots = {} & {
    'group-bar'?: (props: typeof __VLS_1) => any;
} & {
    'group-bar-label'?: (props: typeof __VLS_3) => any;
} & {
    'bar-label'?: (props: typeof __VLS_5) => any;
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
