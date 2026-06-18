import dayjs, { type Dayjs } from "dayjs";
import type { GanttBarObject, GGanttChartConfig } from "../types";
export declare const DEFAULT_DATE_FORMAT = "YYYY-MM-DD HH:mm";
export default function useDayjsHelper(config?: GGanttChartConfig): {
    chartStartDayjs: import("vue").ComputedRef<dayjs.Dayjs>;
    chartEndDayjs: import("vue").ComputedRef<dayjs.Dayjs>;
    toDayjs: (input: string | Date | GanttBarObject, startOrEnd?: "start" | "end") => dayjs.Dayjs;
    format: (input: string | Date | Dayjs, pattern?: string | false) => string | Date;
    diffDates: () => number;
};
