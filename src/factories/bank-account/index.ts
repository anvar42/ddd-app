import { Inject } from "@nestjs/common";
import { Amount, BankAccount, BankAccountStatus, BankAccountType, User } from "src/domain";
import { FactorySymbols } from "../di-symbols";
import { IdentifierFactory } from "../identifier";

export interface BankAccountFactory {
    restore(params: BankAccountParams): BankAccount
}

export type BankAccountParams = {
    id?: string,
    owner: User,
}

export class BankAccountFactoryImpl implements BankAccountFactory {
    constructor(
        @Inject(FactorySymbols.IdentifierFactory) private readonly identifierFactory: IdentifierFactory
    ) {}

    public restore(params: BankAccountParams): BankAccount {
        const userId = params.owner.getID().getValue();
        return new BankAccount(
            this.identifierFactory.generate(params.id),
            this.genereateBankId(userId),
            params.owner,
            this.generateAccountNumber(userId),
            new Amount(0),
            BankAccountType.Business,
            BankAccountStatus.Active,
        )
    }

    private genereateBankId(userId: string) {
        return `Bank-ID-${userId}-${Date.now()}`;
    }

    private generateAccountNumber(userId: string): string {
        return `ACC-${userId}-${Date.now()}`;
    }
}