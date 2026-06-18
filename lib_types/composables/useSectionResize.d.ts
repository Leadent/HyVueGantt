interface ResizeState {
    isResizing: boolean;
    startX: number;
    startWidth: number;
}
export declare const useSectionResize: () => {
    resizeState: import("vue").Ref<{
        isResizing: boolean;
        startX: number;
        startWidth: number;
    }, ResizeState | {
        isResizing: boolean;
        startX: number;
        startWidth: number;
    }>;
    handleResizeStart: (e: MouseEvent, currentWidth: number) => void;
    handleResizeMove: (e: MouseEvent, onResize: (newWidth: number) => void) => void;
    handleResizeEnd: () => void;
    handleTouchStart: (e: TouchEvent, currentWidth: number) => void;
    handleTouchMove: (e: TouchEvent, onResize: (newWidth: number) => void) => void;
    resetResizeState: () => void;
};
export {};
