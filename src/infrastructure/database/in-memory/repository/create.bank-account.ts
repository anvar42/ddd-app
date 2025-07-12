import { BankAccount } from "src/domain";
import { BankAccountRepository } from "src/repositories/bank-account";

export class BankAccountRepositoryImpl implements BankAccountRepository {
    private map: Map<any, any> = new Map();
    constructor() {}

    public async save(bankAccount: BankAccount) {
        this.map.set(bankAccount.getID(), bankAccount);
        return bankAccount;
    }

    public async getAllData() {
        const values = [...this.map.values()];
        return JSON.stringify(values, null, 2);
    }
}
