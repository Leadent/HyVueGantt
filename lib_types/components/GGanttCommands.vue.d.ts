import type { ColorScheme } from "../types";
import type { UseRowsReturn } from "../composables/useRows";
interface Props {
    colors: ColorScheme;
    font: string;
    maxRows: number;
    hasGroupRows: boolean;
    isAtTop: boolean;
    isAtBottom: boolean;
    zoomLevel: number;
    internalPrecision: string;
    precision: string;
    canZoomIn: boolean;
    canZoomOut: boolean;
    scrollPosition: number;
    exportEnabled: boolean;
    isExporting: boolean;
    selectedExportFormat: string;
    rowManager: UseRowsReturn;
    export?: (format?: string) => Promise<void>;
}
declare var __VLS_1: {
    zoomIn: () => void;
    zoomOut: () => void;
    scrollRowUp: () => void;
    scrollRowDown: () => void;
    expandAllGroups: () => void;
    collapseAllGroups: () => void;
    handleToStart: () => void;
    handleBack: () => void;
    handleScroll: () => void;
    handleForward: () => void;
    handleToEnd: () => void;
    undo: () => void;
    redo: () => void;
    canUndo: import("vue").ComputedRef<boolean>;
    canRedo: import("vue").ComputedRef<boolean>;
    isAtTop: boolean;
    isAtBottom: boolean;
    zoomLevel: number;
    export: (format?: string) => void;
};
type __VLS_Slots = {} & {
    commands?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    redo: () => any;
    undo: () => any;
    scrollRowUp: () => any;
    scrollRowDown: () => any;
    expandAllGroups: () => any;
    collapseAllGroups: () => any;
    handleToStart: () => any;
    handleBack: () => any;
    handleScroll: () => any;
    handleForward: () => any;
    handleToEnd: () => any;
    zoomOut: () => any;
    zoomIn: () => any;
    triggerExport: () => any;
    "update:selectedExportFormat": (value: string) => any;
    "update:scrollPosition": (value: number) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onRedo?: (() => any) | undefined;
    onUndo?: (() => any) | undefined;
    onScrollRowUp?: (() => any) | undefined;
    onScrollRowDown?: (() => any) | undefined;
    onExpandAllGroups?: (() => any) | undefined;
    onCollapseAllGroups?: (() => any) | undefined;
    onHandleToStart?: (() => any) | undefined;
    onHandleBack?: (() => any) | undefined;
    onHandleScroll?: (() => any) | undefined;
    onHandleForward?: (() => any) | undefined;
    onHandleToEnd?: (() => any) | undefined;
    onZoomOut?: (() => any) | undefined;
    onZoomIn?: (() => any) | undefined;
    onTriggerExport?: (() => any) | undefined;
    "onUpdate:selectedExportFormat"?: ((value: string) => any) | undefined;
    "onUpdate:scrollPosition"?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
