import * as Domain from "../../domain";

export type BankAccountExternalPrinted = {}

export interface ReturnTypeCreatedBankAccount {
    printForExternal(entity: Domain.BankAccount): Promise<BankAccountExternalPrinted>;
}

export class ReturnTypeCreatedBankAccountImpl implements ReturnTypeCreatedBankAccount {

    public async printForExternal(entity: Domain.BankAccount): Promise<BankAccountExternalPrinted> {
        return {

        }
    }
}