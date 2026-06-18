import type { Holiday } from "../types";
import type { GGanttChartConfig } from "../types/config";
export declare function useHolidays(config: GGanttChartConfig): {
    holidays: import("vue").Ref<{
        date: Date;
        name: string;
        type: string;
    }[], Holiday[] | {
        date: Date;
        name: string;
        type: string;
    }[]>;
    getHolidayInfo: (date: Date) => {
        isHoliday: boolean;
        holidayName: string;
        holidayType: string;
    } | null;
};
