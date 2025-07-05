import * as Infrastructure from "../infrastructure";

export class Dependencies implements Infrastructure.Dependencies {
    private readonly container: any;
    constructor(){}

    public async load(): Promise<void> {
        
    }

    public getItem<T>(symbol: symbol): T {
        return this.container.get(symbol);
    }
}