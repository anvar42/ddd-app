
export class Amount {
    constructor(
        private value: number = 0
    ) {}

    public getValue() {
        return this.value;
    }

    public toNumber(): number {
        return this.value;
    }
}