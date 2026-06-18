import type { GGanttChartConfig } from "../types";
export default function useTimePositionMapping(config?: GGanttChartConfig): {
    mapTimeToPosition: (time: string) => number;
    mapPositionToTime: (xPos: number) => string;
};
