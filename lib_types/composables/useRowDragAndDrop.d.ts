import { type Ref } from "vue";
import type { ChartRow, RowDragEvent } from "../types";
interface DragState {
    isDragging: boolean;
    draggedRow: ChartRow | null;
    dropTarget: {
        row: ChartRow | null;
        position: "before" | "after" | "child";
    };
}
export interface UseRowDragAndDropReturn {
    dragState: Ref<DragState>;
    handleDragStart: (row: ChartRow, event: DragEvent) => void;
    handleDragOver: (row: ChartRow, event: DragEvent) => void;
    handleDrop: () => void;
    resetOrder: () => void;
    isDescendant: (parent: ChartRow, potentialChild: ChartRow) => boolean;
    findRowIndexById: (rows: ChartRow[], id: string | number) => [number, ChartRow[]];
}
export declare function useRowDragAndDrop(rows: Ref<ChartRow[]>, isSorted: Ref<boolean>, updateRows: (rows: ChartRow[]) => void, emit: (event: "row-drop", payload: RowDragEvent) => void): UseRowDragAndDropReturn;
export {};
