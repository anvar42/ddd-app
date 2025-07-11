import { Amount } from "../base";
import { Identifier } from "../Identifier";
import { User } from "../user";

export class BankAccount {
    constructor(
        private id: Identifier,
        private bankId: string,
        private owner: User,
        private accountNumber: string,
        private balance: Amount,
        private bankAccountType: BankAccountType,
        private status: BankAccountStatus,
        private createAt: Date = new Date(),
    ) {
        this.checkBalance();
    }

    public getID() {
        return this.id;
    }

    public getAccountNumber() {
        return this.accountNumber;
    }

    public getBankId() {
        return this.bankId;
    }

    public getOwnerId() {
        return this.owner;
    }

    public getBalance() {
        return this.balance;
    }

    public getBankAccountType() {
        return this.bankAccountType;
    }

    public getStatus() {
        return this.status;
    }

    public getCreateAt() {
        return this.createAt;
    }

    private checkBalance() {
        if (this.balance.toNumber() < 0) {
            throw new Error("Amount should not be less than zero");
        }
    }
}

export enum BankAccountType  {
    Virtual = 'virtual',
    Checking = 'checking',
    Business = 'business'
}

export enum BankAccountStatus {
    Active = "active",
    Closed = "closed",
    Frozen = "frozen"
}
