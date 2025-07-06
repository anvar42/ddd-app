import { BankAccount } from "src/domain";

export interface BankAccountRepository {
    save(bankAccount: BankAccount): Promise<void>;

    getAllData(): Promise<any>;
}
