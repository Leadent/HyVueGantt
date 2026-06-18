import { type ComputedRef, type Ref } from "vue";
import type { BarConnection, BarPosition, ConnectionDeleteEvent, ConnectionLabelStyle, ConnectionPattern, ConnectionRelation, ConnectionSpeed, ConnectionType, GGanttChartProps } from "../types";
import type { UseRowsReturn } from "./useRows";
export interface UseConnectionsReturn {
    connections: Ref<BarConnection[]>;
    barPositions: Ref<Map<string, BarPosition>>;
    getConnectorProps: ComputedRef<(conn: BarConnection) => {
        sourceBar: BarPosition;
        targetBar: BarPosition;
        type?: ConnectionType;
        color?: string;
        pattern?: ConnectionPattern;
        animated?: boolean;
        animationSpeed?: ConnectionSpeed;
        relation?: ConnectionRelation;
        label?: string;
        labelAlwaysVisible?: boolean;
        labelStyle?: ConnectionLabelStyle | undefined;
        isSelected: boolean;
    } | null>;
    initializeConnections: () => void;
    updateBarPositions: () => Promise<void>;
    handleConnectionClick: (connection: BarConnection) => void;
    selectedConnection: Ref<BarConnection | null>;
    deleteSelectedConnection: () => void;
}
export declare function useConnections(rowManager: UseRowsReturn, props: GGanttChartProps, id: Ref<string>, emit: {
    (e: "connection-delete", value: ConnectionDeleteEvent): void;
}): UseConnectionsReturn;
