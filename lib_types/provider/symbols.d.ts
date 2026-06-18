import type { InjectionKey, Ref } from "vue";
import type { GGanttBooleanConfig, GGanttChartConfig, GanttBarObject, TimeUnit } from "../types";
export type EmitBarEvent = (e: MouseEvent, bar: GanttBarObject, datetime?: string | Date, movedBars?: Map<GanttBarObject, {
    oldStart: string;
    oldEnd: string;
}>) => void;
export declare const CONFIG_KEY: InjectionKey<GGanttChartConfig>;
export declare const BOOLEAN_KEY: InjectionKey<GGanttBooleanConfig>;
export declare const EMIT_BAR_EVENT_KEY: InjectionKey<EmitBarEvent>;
export declare const BAR_CONTAINER_KEY: InjectionKey<Ref<HTMLElement | null>>;
export declare const CHART_AREA_KEY: InjectionKey<Ref<HTMLElement | null>>;
export declare const CHART_WRAPPER_KEY: InjectionKey<Ref<HTMLElement | null>>;
export declare const GANTT_ID_KEY: InjectionKey<string>;
export declare const INTERNAL_PRECISION_KEY: InjectionKey<Ref<TimeUnit>>;
