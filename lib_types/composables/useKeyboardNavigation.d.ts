import type { BarConnection } from "../types";
import { type Ref } from "vue";
interface NavigationControls {
    scrollPosition: Ref<number>;
    handleStep: (value: number, wrapper: HTMLElement) => void;
    handleZoomUpdate: (increase: boolean) => void;
}
interface ConnectionControls {
    selectedConnection: Ref<BarConnection | null>;
    deleteSelectedConnection: () => void;
}
export declare function useKeyboardNavigation(chartNavigation: NavigationControls, wrapperRef: Ref<HTMLElement | null>, ganttContainerRef: Ref<HTMLElement | null>, connectionControls: ConnectionControls, enableConnectionDeletion: Ref<boolean>): {
    handleKeyDown: (event: KeyboardEvent) => void;
};
export {};
