import type { GanttBarObject } from "../types";
import type { GGanttChartConfig } from "../types/config";
export declare function useBarKeyboardControl(bar: GanttBarObject, config: GGanttChartConfig, emitBarEvent: (e: MouseEvent, bar: GanttBarObject, datetime?: string | Date) => void): {
    onBarKeyDown: (event: KeyboardEvent) => void;
};
