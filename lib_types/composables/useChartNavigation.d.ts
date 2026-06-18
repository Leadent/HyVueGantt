import { type Ref } from "vue";
import type useTimeaxisUnits from "./useTimeaxisUnits";
interface ScrollRefs {
    rowsContainer: Ref<HTMLElement | null>;
    labelColumn: Ref<any>;
}
interface ChartNavigationOptions {
    scrollRefs: ScrollRefs;
    updateBarPositions: () => void;
    timeaxisUnits: ReturnType<typeof useTimeaxisUnits>;
}
export declare function useChartNavigation(options: ChartNavigationOptions, maxRows: number): {
    scrollPosition: Ref<number, number>;
    isAtTop: Ref<boolean, boolean>;
    isAtBottom: Ref<boolean, boolean>;
    handleStep: (newPosition: number, wrapper: HTMLElement) => void;
    handleScroll: (wrapper: HTMLElement) => void;
    handleWheel: (e: WheelEvent, wrapper: HTMLElement) => void;
    handleContentScroll: (e: Event) => void;
    handleLabelScroll: (scrollTop: number) => void;
    handleZoomUpdate: (increase: boolean) => Promise<void>;
    scrollRowUp: () => void;
    scrollRowDown: () => void;
};
export {};
