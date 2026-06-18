import { type Ref } from "vue";
import type { GanttBarObject } from "../types";
export interface UseTooltipReturn {
    showTooltip: Ref<boolean>;
    tooltipBar: Ref<GanttBarObject | undefined>;
    initTooltip: (bar: GanttBarObject) => void;
    clearTooltip: () => void;
}
export declare function useTooltip(): UseTooltipReturn;
