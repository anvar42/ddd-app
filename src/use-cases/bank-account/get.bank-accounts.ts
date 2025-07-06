import { Inject } from "@nestjs/common";
import { BankAccountRepository } from "src/repositories/bank-account";
import { RepositorySymbols } from "src/repositories/di.symbols";

export interface GetBankAccountUseCase {
    execute(): Promise<any>;
}

export class GetBankAccountUseCaseImpl implements GetBankAccountUseCase {
    constructor(
        @Inject(RepositorySymbols.CreateBankAccountRepository) private readonly bankAccountRepository: BankAccountRepository,
    ) {}

    public async execute(): Promise<any> {
        const res = await this.bankAccountRepository.getAllData();
        
        return res;
    }
}