import { BankAccount } from "src/domain";

export interface BankAccountRepository {
    save(bankAccount: BankAccount): Promise<BankAccount>;

    getAllData(): Promise<any>;
}
