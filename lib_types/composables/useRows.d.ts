import { type Ref, type Slots, type ComputedRef } from "vue";
import type { ChartRow, GanttBarObject, LabelColumnConfig, SortState } from "../types";
export interface UseRowsReturn {
    rows: Ref<ChartRow[]>;
    updateRows: (newRows: ChartRow[]) => void;
    sortState: Ref<SortState>;
    toggleSort: (column: string) => void;
    getChartRows: () => ChartRow[];
    onSortChange: (callback: () => void) => () => void;
    toggleGroupExpansion: (rowId: string | number) => void;
    isGroupExpanded: (rowId: string | number) => boolean;
    getFlattenedRows: () => ChartRow[];
    onGroupExpansionChange: (callback: () => void) => () => void;
    customOrder: Ref<Map<string | number, number>>;
    resetCustomOrder: () => void;
    expandAllGroups: () => void;
    collapseAllGroups: () => void;
    canUndo: ComputedRef<boolean>;
    canRedo: ComputedRef<boolean>;
    undo: () => HistoryChange;
    redo: () => HistoryChange;
    clearHistory: () => void;
    onBarMove: () => void;
    areAllGroupsExpanded: ComputedRef<boolean>;
    areAllGroupsCollapsed: ComputedRef<boolean>;
    expandedGroups: Ref<Set<string | number>>;
}
export interface UseRowsProps {
    barStart: Ref<string>;
    barEnd: Ref<string>;
    dateFormat: Ref<string | false>;
    createGroupBarsFromChildren?: Ref<boolean>;
    multiColumnLabel: Ref<LabelColumnConfig[]>;
    onSort: (sortState: SortState) => void;
    initialSort?: SortState;
    onGroupExpansion: (rowId: string | number) => void;
}
interface BarHistoryChange {
    barId: string;
    rowId: string | number;
    oldStart?: string;
    newStart?: string;
    oldEnd?: string;
    newEnd?: string;
}
interface RowHistoryChange {
    type: "reorder" | "group";
    sourceRow: ChartRow;
    targetRow?: ChartRow;
    oldIndex: number;
    newIndex: number;
    oldParentId?: string | number;
    newParentId?: string | number;
}
interface HistoryChange {
    rowChanges: RowHistoryChange[];
    barChanges: BarHistoryChange[];
}
export declare const findBarInRows: (rows: ChartRow[], barId: string) => GanttBarObject | null;
export declare const useRows: (slots: Slots, { barStart, barEnd, dateFormat, createGroupBarsFromChildren, multiColumnLabel, onSort, initialSort, onGroupExpansion }: UseRowsProps, initialRows?: Ref<ChartRow[]>) => UseRowsReturn;
export {};
