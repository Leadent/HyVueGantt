export interface ObjectFactory<T> {
    create: () => T;
    reset: (obj: T) => void;
    validate?: (obj: T) => boolean;
}
interface PoolConfig {
    maxSize?: number;
    initialSize?: number;
    cleanupInterval?: number;
}
export interface ConnectionPositionData {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    width: number;
    height: number;
}
export interface PooledMouseEventData {
    type: string;
    clientX: number;
    clientY: number;
    button: number;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    target: EventTarget | null;
}
export interface BarPositionData {
    x: number;
    y: number;
    width: number;
    height: number;
    id: string;
}
declare class ObjectPool<T> {
    private available;
    private inUse;
    private factory;
    private maxSize;
    private cleanupInterval;
    private cleanupTimer?;
    constructor(factory: ObjectFactory<T>, config?: PoolConfig);
    acquire(): T;
    release(obj: T): void;
    private cleanup;
    getStats(): {
        available: number;
        inUse: number;
        total: number;
        maxSize: number;
    };
    destroy(): void;
}
export declare function useObjectPool(): {
    createPool: <T>(name: string, factory: ObjectFactory<T>, config?: PoolConfig) => ObjectPool<T>;
    createConnectionPositionPool: () => ObjectPool<ConnectionPositionData>;
    createMouseEventPool: () => ObjectPool<PooledMouseEventData>;
    createBarPositionPool: () => ObjectPool<BarPositionData>;
    createArrayPool: <T>(name: string, maxSize?: number) => ObjectPool<T[]>;
    getAllStats: () => Record<string, any>;
    destroyPool: (name: string) => void;
    destroyAllPools: () => void;
};
export {};
