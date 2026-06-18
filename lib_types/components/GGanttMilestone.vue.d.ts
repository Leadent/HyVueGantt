import type { GanttMilestone } from "../types";
type __VLS_Props = {
    milestone: GanttMilestone;
};
declare var __VLS_2: `milestone-${string}`, __VLS_3: {
    milestone: GanttMilestone;
    styleConfig: {
        label: {
            background: string;
            color: string;
            border: string;
        };
        marker: {
            borderLeft: string;
        };
    };
    position: number;
}, __VLS_5: {
    milestone: GanttMilestone;
    styleConfig: {
        label: {
            background: string;
            color: string;
            border: string;
        };
        marker: {
            borderLeft: string;
        };
    };
    position: number;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_2>]?: (props: typeof __VLS_3) => any;
} & {
    milestone?: (props: typeof __VLS_5) => any;
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
