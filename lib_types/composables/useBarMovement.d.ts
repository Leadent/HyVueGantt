import { type GanttBarObject } from "../types/bar";
import type { GGanttChartConfig } from "../types/config";
import dayjs from "dayjs";
import type { UseRowsReturn } from "./useRows";
export interface MovementResult {
    success: boolean;
    affectedBars: Set<GanttBarObject>;
}
export interface MovementAPI {
    moveBar: (bar: GanttBarObject, newStart: string, newEnd: string) => MovementResult;
    findOverlappingBars: (bar: GanttBarObject) => GanttBarObject[];
    findConnectedBars: (bar: GanttBarObject) => GanttBarObject[];
    getAllBars: () => GanttBarObject[];
}
interface DayjsHelper {
    toDayjs: (input: string | Date | GanttBarObject, startOrEnd?: "start" | "end") => dayjs.Dayjs;
    format: (input: string | Date | dayjs.Dayjs, pattern?: string | false) => string | Date;
}
export declare function useBarMovement(config: GGanttChartConfig, rowManager: UseRowsReturn, dayjsHelper: DayjsHelper): {
    moveBar: (bar: GanttBarObject, newStart: string, newEnd: string, initialMove?: boolean) => MovementResult;
    findOverlappingBars: (bar: GanttBarObject) => GanttBarObject[];
    findConnectedBars: (bar: GanttBarObject) => GanttBarObject[];
    getAllBars: () => GanttBarObject[];
};
export {};
