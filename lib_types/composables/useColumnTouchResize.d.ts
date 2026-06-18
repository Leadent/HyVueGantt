export interface TouchResizeState {
    isResizing: boolean;
    startX: number;
    currentColumn: string | null;
    initialWidth: number;
}
export declare function useColumnTouchResize(): {
    touchState: import("vue").Ref<{
        isResizing: boolean;
        startX: number;
        currentColumn: string | null;
        initialWidth: number;
    }, TouchResizeState | {
        isResizing: boolean;
        startX: number;
        currentColumn: string | null;
        initialWidth: number;
    }>;
    handleTouchStart: (e: TouchEvent, column: string, currentWidth: number) => void;
    handleTouchMove: (e: TouchEvent, onResize: (column: string, newWidth: number) => void) => void;
    handleTouchEnd: () => void;
    handleTouchCancel: () => void;
};
