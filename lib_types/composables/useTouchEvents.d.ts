import type { GanttBarObject } from "../types";
export declare function useTouchEvents(initDragCallback: (bar: GanttBarObject, e: MouseEvent) => void, threshold?: number): {
    handleTouchStart: (event: TouchEvent, bar?: GanttBarObject) => void;
    handleTouchMove: (event: TouchEvent) => void;
    handleTouchEnd: (event: TouchEvent) => void;
    handleTouchCancel: (event: TouchEvent) => void;
};
