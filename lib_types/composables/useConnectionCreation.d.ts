import { type ComputedRef, type Ref } from "vue";
import type { GGanttChartConfig, GanttBarObject, ConnectionStartEvent, ConnectionDragEvent, ConnectionCompleteEvent, ConnectionCreationState, ConnectionPointHoverState, ConnectionPoint } from "../types";
import type { UseRowsReturn } from "../composables/useRows";
export interface UseConnectionCreationReturn {
    connectionState: Ref<ConnectionCreationState>;
    hoverState: Ref<ConnectionPointHoverState>;
    startConnectionCreation: (bar: GanttBarObject, point: ConnectionPoint, e: MouseEvent) => void;
    updateConnectionDrag: (e: MouseEvent) => void;
    completeConnection: (targetBar: GanttBarObject, targetPoint: ConnectionPoint, e: MouseEvent) => void;
    cancelConnectionCreation: (e: MouseEvent) => void;
    handleConnectionPointHover: (barId: string, point: ConnectionPoint | null, isEnter: boolean) => void;
    canBeConnectionTarget: ComputedRef<(bar: GanttBarObject) => boolean>;
}
export declare function useConnectionCreation(config: GGanttChartConfig, rowManager: UseRowsReturn, emit: {
    (e: "connection-start", value: ConnectionStartEvent): void;
    (e: "connection-drag", value: ConnectionDragEvent): void;
    (e: "connection-complete", value: ConnectionCompleteEvent): void;
    (e: "connection-cancel", value: ConnectionStartEvent): void;
}, reinitializeConnections: () => void): UseConnectionCreationReturn;
