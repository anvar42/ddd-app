import * as Domain from "../../domain";

export type BankAccountExternalPrinted = {
  bankAccountId: string;
  username: string;
  bankAccountNumber: string;
  address: string;
}

export interface BankAccountPresenter {
    printForExternal(entity: Domain.BankAccount): Promise<BankAccountExternalPrinted>;
}

export class BankAccountPresenterImpl implements BankAccountPresenter {

    public async printForExternal(entity: Domain.BankAccount): Promise<BankAccountExternalPrinted> {
        return {
          bankAccountId: entity.getID().getValue(),
          username: entity.getOwner().getFirstName(),
          bankAccountNumber: entity.getBankAccountNumber(),
          address: entity.getOwner().getAddress().getName(),
        }
    }
}