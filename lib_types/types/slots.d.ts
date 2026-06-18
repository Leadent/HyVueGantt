import type { ComputedRef, Ref } from "vue";
import type { GanttBarObject } from "./bar";
import type { ChartRow, GanttMilestone, TimeaxisEvent, TimeaxisUnit } from "./chart";
interface CommandsSlotProps {
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
    canUndo: ComputedRef<boolean>;
    canRedo: ComputedRef<boolean>;
    isAtTop: Ref<boolean>;
    isAtBottom: Ref<boolean>;
    zoomLevel: Ref<number>;
    canZoomIn: ComputedRef<boolean>;
    canZoomOut: ComputedRef<boolean>;
    scrollPosition: Ref<number>;
    areAllGroupsExpanded: ComputedRef<boolean>;
    areAllGroupsCollapsed: ComputedRef<boolean>;
    export: () => void;
}
interface LabelColumnSlotProps {
    Label: {
        value: string;
        row: ChartRow;
    };
    Id: {
        value: string | number;
        row: ChartRow;
    };
    StartDate: {
        value: string;
        row: ChartRow;
    };
    EndDate: {
        value: string;
        row: ChartRow;
    };
    Duration: {
        value: string;
        row: ChartRow;
    };
    [key: string]: {
        value: string | number;
        row: ChartRow;
    };
}
export interface GGanttChartSlots {
    "upper-timeunit": (props: {
        label: string;
        value: string;
        date: Date;
    }) => void;
    timeunit: (props: {
        label: string;
        value: string;
        date: Date;
    }) => void;
    "current-time-label": () => void;
    "holiday-tooltip": (props: {
        unit: TimeaxisUnit;
    }) => void;
    "event-tooltip": (props: {
        event: TimeaxisEvent;
        formatDate: (date: string | Date) => string;
    }) => void;
    "timeaxis-event": (props: {
        event: TimeaxisEvent;
    }) => void;
    "pointer-marker-tooltips": (props: {
        hitBars: GanttBarObject[];
        datetime: string | Date;
    }) => void;
    milestone: (props: {
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
    }) => void;
    [key: `milestone-${string}`]: (props: {
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
    }) => void;
    commands: (props: CommandsSlotProps) => void;
    "bar-tooltip": (props: {
        bar: GanttBarObject;
        barStart: string | Date;
        barEnd: string | Date;
        barStartPlanned?: string | Date;
        barEndPlanned?: string | Date;
    }) => void;
    "bar-label": (props: {
        bar: GanttBarObject;
    }) => void;
    "group-bar": (props: {
        width: number;
        height: number;
        bar: GanttBarObject;
    }) => void;
    [key: `label-column-${keyof LabelColumnSlotProps}`]: (props: LabelColumnSlotProps[keyof LabelColumnSlotProps]) => void;
    [key: `label-column-${keyof LabelColumnSlotProps}-group`]: (props: LabelColumnSlotProps[keyof LabelColumnSlotProps]) => void;
}
export {};
