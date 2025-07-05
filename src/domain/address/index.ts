import { Identifier } from "../Identifier";

export class Address {
    constructor(
        private id: Identifier,
        private name: string,
    ){}

    public getName() {
        return this.name;
    }
}
