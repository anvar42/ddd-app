import { Identifier } from "../Identifier";

export class BankAccount {
    constructor(
        private id: Identifier,
        private accountNumber: string,
        private status: BankAccountStatus,
        private bankAccountType: BankAccountType
    ) {}
}

export type BankAccountType = {
    Virtual: 'virtual',
    Checking: 'checking',
    Business: 'business'
}

export type BankAccountStatus = {
    Active: "active",
    Closed: "closed",
    Frozen: "frozen"
}
