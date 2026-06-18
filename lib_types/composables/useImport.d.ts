import type { ImportOptions, ImportResult } from "../types/import";
export declare function useImport(): {
    importFromFile: (file: File, options: ImportOptions) => Promise<ImportResult>;
    isImporting: import("vue").Ref<boolean, boolean>;
    importProgress: import("vue").Ref<number, number>;
    lastError: import("vue").Ref<string | null, string | null>;
};
