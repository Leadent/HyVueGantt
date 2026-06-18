import type { GGanttChartConfig, TimeaxisUnit, TimeUnit } from "../types";
export declare const capitalizeString: (str: string) => string;
export declare const capitalizeWords: (str: string) => string;
export default function useTimeaxisUnits(config?: GGanttChartConfig): {
    timeaxisUnits: import("vue").ComputedRef<{
        result: {
            upperUnits: TimeaxisUnit[];
            lowerUnits: TimeaxisUnit[];
            events: {
                id: string;
                label: string;
                startDate: string | Date;
                endDate: string | Date;
                color?: string | undefined;
                backgroundColor?: string | undefined;
                description?: string | undefined;
                width?: string | undefined;
                xPosition?: number | undefined;
            }[];
        };
        globalMinuteStep: string[];
    }>;
    internalPrecision: import("vue").Ref<TimeUnit, TimeUnit>;
    zoomLevel: import("vue").Ref<number, number>;
    adjustZoomAndPrecision: (increase: boolean) => void;
    canZoomIn: import("vue").ComputedRef<boolean>;
    canZoomOut: import("vue").ComputedRef<boolean>;
};
