import { Address } from "../address";
import { Identifier } from "../Identifier";

export class User {
    constructor(
        private id: Identifier,
        private firstname: string,
        private lastname: string,
        private pnfl: string,
        private address: Address,
        private createdAt?: Date,
    ){}

    public getID() {
        return this.id;
    }

    public getFirstName() {
        return this.firstname;
    }

    public getLastname() {
        return this.lastname;
    }

    public getPnfl() {
        return this.pnfl;
    }

    public getAddress() {
        return this.address;
    }

    public getCreatedAt() {
        return this.createdAt;
    }
}
