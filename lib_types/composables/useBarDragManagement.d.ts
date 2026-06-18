import type { GanttBarObject } from "../types/bar";
declare const useBarDragManagement: () => {
    initDragOfBar: (bar: GanttBarObject, e: MouseEvent) => void;
    initDragOfBundle: (mainBar: GanttBarObject, e: MouseEvent) => void;
    snapBackMovedBars: () => void;
    handleDrag: (e: MouseEvent, bar: GanttBarObject) => void;
    getConnectedBars: (bar: GanttBarObject) => GanttBarObject[];
};
export default useBarDragManagement;
