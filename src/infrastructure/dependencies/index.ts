export interface Dependencies {
    load(): Promise<void>

    getItem<T>( symbol: symbol ): T
}
