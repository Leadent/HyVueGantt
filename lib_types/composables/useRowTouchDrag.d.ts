import { type Ref } from "vue";
import type { ChartRow } from "../types";
type DropPosition = "before" | "after" | "child";
interface DropTarget {
    row: ChartRow | null;
    position: DropPosition;
}
interface DragResult {
    sourceRow: ChartRow | null;
    dropTarget: DropTarget;
    dropPosition: DropPosition;
}
export interface TouchDragState {
    isDragging: boolean;
    startY: number;
    currentY: number;
    draggedRow: ChartRow | null;
    dropTarget: DropTarget;
    dragElement: HTMLElement | null;
    initialTransform: string;
}
interface RowTouchDragReturn {
    touchState: Ref<TouchDragState>;
    handleTouchStart: (event: TouchEvent, row: ChartRow, element: HTMLElement) => void;
    handleTouchMove: (event: TouchEvent, targetRow: ChartRow, rowElement: HTMLElement) => void;
    handleTouchEnd: (event: TouchEvent) => DragResult | null;
    resetTouchState: () => void;
}
export declare function useRowTouchDrag(): RowTouchDragReturn;
export {};
