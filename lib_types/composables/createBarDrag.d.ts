import type { GanttBarObject, GGanttChartConfig } from "../types";
import type { MovementAPI } from "./useBarMovement";
export default function createBarDrag(bar: GanttBarObject, onDrag: ((e: MouseEvent, bar: GanttBarObject) => void) | undefined, onEndDrag: ((e: MouseEvent, bar: GanttBarObject) => void) | undefined, config: GGanttChartConfig, movementAPI: MovementAPI, ganttId: string): {
    isDragging: import("vue").Ref<boolean, boolean>;
    initDrag: (e: MouseEvent) => void;
};
