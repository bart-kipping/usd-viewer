
declare type FSNode = {
    contents: ArrayLike,
    id: number,
    mode: number,
    name: string,
    timestamp: number,
    isFolder: boolean,
    isDevice: boolean,
    read: boolean,
    write: boolean,
}

declare type USD = {
    FS_createDataFile: (parent: string, filepath: string, data: Uint8Array, canRead: boolean, canWrite: boolean, canOwn: boolean) => FSNode,
    FS_createPath: (parent: string, path: string, canRead: boolean, canWrite: boolean) => FSNode,
    FS_unlink: (path: string) => void,
    HdWebSyncDriver: new (delegate: hydraDelegate, filepath: string) => HdWebSyncDriver,
    flushPendingDeletes: () => void,
    ready: Promise<any>,
};

declare type USDStage = {
    GetStartTimeCode(): number,
    GetEndTimeCode(): number,
    GetTimeCodesPerSecond(): number,
}

declare type HdWebSyncDriver = {
    getFile: (path: string, cb: (loadedFile: ArrayBufferLike) => void) => void,
    GetStage: () => USDStage,
    SetTime(timecode: number): void,
    GetTime(): number,
    Draw(): void,

    /** ??? */
    clone(): HdWebSyncDriver,
    /** ??? */
    delete(): void,
    /** ??? */
    deleteLater(): void,
    isDeleted(): boolean,
    /** ??? */
    isAliasOf(): boolean,
}

/**
 * Loads the USD Module.
 * @example
 * ```javascript
 * getUsdModule({ mainScriptUrlOrBlob: "/emHdBindings.js" }).then(USD => { ... })
 * ```
 */
export function getUsdModule(opts?: { mainScriptUrlOrBlob?: string }): Promise<USD>;

export type USDRoot = {}