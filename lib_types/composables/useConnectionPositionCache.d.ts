import type { BarConnection } from "../types";
interface ConnectionPositionData {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    width: number;
    height: number;
}
interface BarPositionInfo {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare function useConnectionPositionCache(): {
    updateBarPosition: (barId: string, position: BarPositionInfo) => void;
    getConnectionPosition: (connection: BarConnection, sourceBar: BarPositionInfo, targetBar: BarPositionInfo) => ConnectionPositionData;
    invalidateCache: () => void;
    cleanupCache: () => void;
    getCacheStats: () => {
        connectionCacheSize: number;
        barPositionCacheSize: number;
        cacheVersion: number;
    };
};
export {};
