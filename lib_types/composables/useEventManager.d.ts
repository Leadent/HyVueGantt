import { type Ref } from "vue";
interface EventConfig {
    target: EventTarget | (() => EventTarget | null);
    event: string;
    handler: EventListener;
    options?: AddEventListenerOptions;
    once?: boolean;
}
export declare function useEventManager(): {
    addEventListener: (config: EventConfig) => (() => void);
    addEventListeners: (configs: EventConfig[]) => (() => void)[];
    removeEventListener: (target: EventTarget, event: string, handler: EventListener, options?: AddEventListenerOptions) => void;
    removeAllListenersForTarget: (target: EventTarget) => void;
    createScopedManager: (target: EventTarget | Ref<EventTarget | null> | (() => EventTarget | null)) => {
        on: (event: string, handler: EventListener, options?: AddEventListenerOptions) => () => void;
        once: (event: string, handler: EventListener, options?: AddEventListenerOptions) => () => void;
        off: (event: string, handler: EventListener, options?: AddEventListenerOptions) => void;
        cleanup: () => void;
    };
    createEventPattern: {
        mouseDrag: (target: EventTarget | (() => EventTarget | null), onStart: (e: MouseEvent) => void, onMove: (e: MouseEvent) => void, onEnd: (e: MouseEvent) => void) => () => void;
        touchDrag: (target: EventTarget | (() => EventTarget | null), onStart: (e: TouchEvent) => void, onMove: (e: TouchEvent) => void, onEnd: (e: TouchEvent) => void) => () => void;
    };
    cleanup: () => void;
    getStats: () => {
        totalEvents: number;
        eventTypes: {
            [k: string]: number;
        };
        targetsCount: number;
    };
};
export {};
