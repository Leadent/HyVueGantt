import { type Ref } from "vue";
import type { ExportOptions, ExportResult, TimeUnit } from "../types";
import type { UseRowsReturn } from "./useRows";
export declare function useExport(getChartElement: () => HTMLElement | null, getWrapperElement: () => HTMLElement | null, rowManager: UseRowsReturn, config: {
    barStart: Ref<string>;
    barEnd: Ref<string>;
    dateFormat: Ref<string | false>;
    precision: Ref<TimeUnit>;
}): {
    exportChart: (options: ExportOptions) => Promise<ExportResult>;
    downloadExport: (result: ExportResult) => void;
    isExporting: Ref<boolean, boolean>;
    lastError: Ref<string | null, string | null>;
};
