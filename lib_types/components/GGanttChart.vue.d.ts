import type { GanttBarObject, GGanttChartProps, RowDragEvent, GGanttChartEmits, ExportOptions, ExportResult, ImportResult, RangeSelectionEvent } from "../types";
declare const __VLS_export: <T>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_exposed?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: import("vue").PublicProps & __VLS_PrettifyLocal<GGanttChartProps & {
        "onClick-bar"?: ((value: import("../types").GanttBarEvent) => any) | undefined;
        "onMousedown-bar"?: ((value: import("../types").GanttBarEvent) => any) | undefined;
        "onMouseup-bar"?: ((value: import("../types").GanttBarEvent) => any) | undefined;
        "onDblclick-bar"?: ((value: import("../types").GanttBarEvent) => any) | undefined;
        "onMouseenter-bar"?: ((value: import("../types").BarMouseEvent) => any) | undefined;
        "onMouseleave-bar"?: ((value: import("../types").BarMouseEvent) => any) | undefined;
        "onDragstart-bar"?: ((value: import("../types").BarMouseEvent) => any) | undefined;
        "onDrag-bar"?: ((value: import("../types").BarMouseEvent) => any) | undefined;
        "onDragend-bar"?: ((value: import("../types").GanttBarDragEvent) => any) | undefined;
        "onContextmenu-bar"?: ((value: import("../types").GanttBarEvent) => any) | undefined;
        onSort?: ((value: import("../types").SortEvent) => any) | undefined;
        "onGroup-expansion"?: ((value: {
            rowId: string | number;
        }) => any) | undefined;
        "onRow-drop"?: ((value: RowDragEvent) => any) | undefined;
        "onProgress-change"?: ((value: import("../types").BarMouseEvent) => any) | undefined;
        "onProgress-drag-start"?: ((value: import("../types").BarMouseEvent) => any) | undefined;
        "onProgress-drag-end"?: ((value: import("../types").BarMouseEvent) => any) | undefined;
        "onConnection-start"?: ((value: import("../types").ConnectionStartEvent) => any) | undefined;
        "onConnection-drag"?: ((value: import("../types").ConnectionDragEvent) => any) | undefined;
        "onConnection-complete"?: ((value: import("../types").ConnectionCompleteEvent) => any) | undefined;
        "onConnection-cancel"?: ((value: import("../types").ConnectionStartEvent) => any) | undefined;
        "onConnection-delete"?: ((value: import("../types").ConnectionDeleteEvent) => any) | undefined;
        "onLabel-edit"?: ((value: import("../types").LabelEditEvent) => any) | undefined;
        "onExport-start"?: ((format: string) => any) | undefined;
        "onExport-success"?: ((result: ExportResult) => any) | undefined;
        "onExport-error"?: ((error: string) => any) | undefined;
        "onImport-data"?: ((value: ImportResult) => any) | undefined;
        "onRange-selection"?: ((value: RangeSelectionEvent) => any) | undefined;
        "onUpdate:importer-visible"?: ((value: boolean) => any) | undefined;
        "onClick-timeaxis-event"?: ((value: import("../types").TimeaxisEvent) => any) | undefined;
    }> & (typeof globalThis extends {
        __VLS_PROPS_FALLBACK: infer P;
    } ? P : {});
    expose: (exposed: import("vue").ShallowUnwrapRef<{
        exportChart: (options: ExportOptions) => Promise<ExportResult>;
        isExporting: import("vue").Ref<boolean, boolean>;
        scrollPosition: import("vue").ComputedRef<number>;
        zoomLevel: import("vue").ComputedRef<number>;
        internalPrecision: import("vue").ComputedRef<import("../types").TimeUnit>;
        getExpandedGroupIds: () => (string | number)[];
        toggleGroupExpansion: (rowId: string | number) => void;
        expandAllGroups: () => void;
        collapseAllGroups: () => void;
        areAllGroupsExpanded: import("vue").ComputedRef<boolean>;
        areAllGroupsCollapsed: import("vue").ComputedRef<boolean>;
        restoreZoom: (zoom: number, precision: ReturnType<() => string>) => void;
        restoreScrollPosition: (percentage: number) => void;
    }>) => void;
    attrs: any;
    slots: {
        [x: string]: ((props: any) => any) | undefined;
    } & {
        [x: string]: ((props: any) => any) | undefined;
    } & {
        'upper-timeunit'?: (props: {
            label: string;
            value: string | undefined;
            date: Date;
        }) => any;
    } & {
        timeunit?: (props: {
            label: string;
            value: string | undefined;
            date: Date;
        }) => any;
    } & {
        'holiday-tooltip'?: (props: {
            unit: import("../types").TimeaxisUnit;
        }) => any;
    } & {
        'event-tooltip'?: (props: {
            event: import("../types").TimeaxisEvent;
            formatDate: (date: string | Date) => string | Date;
        }) => any;
    } & {
        'timeaxis-event'?: (props: {
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
        }) => any;
    } & {
        'current-time-label'?: (props: {}) => any;
    } & {
        'pointer-marker-tooltips'?: (props: {
            hitBars: {
                [x: string]: any;
                [x: number]: any;
                ganttBarConfig: {
                    id: string;
                    label?: string | undefined;
                    html?: string | undefined;
                    hasHandles?: boolean | undefined;
                    immobile?: boolean | undefined;
                    bundle?: string | undefined;
                    pushOnOverlap?: boolean | undefined;
                    pushOnConnect?: boolean | undefined;
                    dragLimitLeft?: number | undefined;
                    dragLimitRight?: number | undefined;
                    class?: string | undefined;
                    milestoneId?: string | undefined;
                    progress?: number | undefined;
                    progressResizable?: boolean | undefined;
                    plannedStyle?: {
                        width?: string | number | undefined;
                        height?: string | number | undefined;
                        minWidth?: string | number | undefined;
                        maxWidth?: string | number | undefined;
                        minHeight?: string | number | undefined;
                        maxHeight?: string | number | undefined;
                        position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | undefined;
                        top?: string | number | undefined;
                        right?: string | number | undefined;
                        bottom?: string | number | undefined;
                        left?: string | number | undefined;
                        zIndex?: number | undefined;
                        display?: string | undefined;
                        opacity?: number | undefined;
                        visibility?: "visible" | "hidden" | "collapse" | undefined;
                        overflow?: "visible" | "hidden" | "scroll" | "auto" | undefined;
                        flex?: string | number | undefined;
                        flexGrow?: number | undefined;
                        flexShrink?: number | undefined;
                        flexBasis?: string | number | undefined;
                        flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | undefined;
                        justifyContent?: string | undefined;
                        alignItems?: string | undefined;
                        margin?: string | number | undefined;
                        marginTop?: string | number | undefined;
                        marginRight?: string | number | undefined;
                        marginBottom?: string | number | undefined;
                        marginLeft?: string | number | undefined;
                        padding?: string | number | undefined;
                        paddingTop?: string | number | undefined;
                        paddingRight?: string | number | undefined;
                        paddingBottom?: string | number | undefined;
                        paddingLeft?: string | number | undefined;
                        color?: string | undefined;
                        backgroundColor?: string | undefined;
                        background?: string | undefined;
                        border?: string | undefined;
                        borderRadius?: string | number | undefined;
                        borderWidth?: string | number | undefined;
                        borderColor?: string | undefined;
                        borderStyle?: string | undefined;
                        fontSize?: string | number | undefined;
                        fontWeight?: string | number | undefined;
                        fontFamily?: string | undefined;
                        lineHeight?: string | number | undefined;
                        textAlign?: "left" | "right" | "center" | "justify" | undefined;
                        textTransform?: "none" | "uppercase" | "lowercase" | "capitalize" | undefined;
                        cursor?: string | undefined;
                        pointerEvents?: "auto" | "none" | undefined;
                        transition?: string | undefined;
                        transform?: string | undefined;
                        overflowX?: "visible" | "hidden" | "scroll" | "auto" | undefined;
                        overflowY?: "visible" | "hidden" | "scroll" | "auto" | undefined;
                    } | undefined;
                    _previousLabel?: string | undefined;
                    connections?: {
                        label?: string | undefined;
                        targetId: string;
                        type?: import("../types").ConnectionType | undefined;
                        color?: string | undefined;
                        pattern?: import("../types").ConnectionPattern | undefined;
                        animated?: boolean | undefined;
                        animationSpeed?: import("../types").ConnectionSpeed | undefined;
                        relation?: import("../types").ConnectionRelation | undefined;
                        labelAlwaysVisible?: boolean | undefined;
                    }[] | undefined;
                };
            }[];
            datetime: string;
        }) => any;
    } & {
        commands?: (props: {
            zoomIn: () => Promise<void>;
            zoomOut: () => Promise<void>;
            scrollRowUp: () => void;
            scrollRowDown: () => void;
            expandAllGroups: () => void;
            collapseAllGroups: () => void;
            handleToStart: () => void;
            handleBack: () => void;
            handleScroll: () => void;
            handleStep: (pos: number) => void;
            handleForward: () => void;
            handleToEnd: () => void;
            undo: () => void;
            redo: () => void;
            canUndo: import("vue").ComputedRef<boolean>;
            canRedo: import("vue").ComputedRef<boolean>;
            isAtTop: boolean;
            isAtBottom: boolean;
            zoomLevel: number;
            internalPrecision: import("../types").TimeUnit;
            canZoomIn: boolean;
            canZoomOut: boolean;
            scrollPosition: number;
            areAllGroupsExpanded: import("vue").ComputedRef<boolean>;
            areAllGroupsCollapsed: import("vue").ComputedRef<boolean>;
            export: (format?: string) => Promise<void>;
        }) => any;
    } & {
        'bar-tooltip'?: (props: {
            bar: GanttBarObject;
            barStart: any;
            barEnd: any;
            barStartPlanned: string | Date | undefined;
            barEndPlanned: string | Date | undefined;
        }) => any;
    };
    emit: GGanttChartEmits;
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PrettifyLocal<T> = (T extends any ? {
    [K in keyof T]: T[K];
} : {
    [K in keyof T as K]: T[K];
}) & {};
