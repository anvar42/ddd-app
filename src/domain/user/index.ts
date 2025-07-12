import { Address } from "../base";
import { Identifier } from "../Identifier";

export class User {
    constructor(
        private id: Identifier,
        private firstname: string,
        private lastname: string,
        private pnfl: string,
        private phoneNumber: string,
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

    public getPhoneNumber() {
        return this.phoneNumber;
    }

    public getCreatedAt() {
        return this.createdAt;
    }

    public getFullName(){
      return this.firstname + " " + this.lastname;
    }
}
