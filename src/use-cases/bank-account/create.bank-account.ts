import { CreateBankAccountDto } from "src/application/api/bank-account/dto/create.bank-account.dto";
import { BankAccountRepository } from "src/repositories/bank-account";
import { BankAccount, BankAccountStatus, BankAccountType } from "src/domain";
import { Inject } from "@nestjs/common";
import { RepositorySymbols } from "src/repositories/di.symbols";
import { CreateUserUseCase } from "../user/create";
import { UseCaseSymbols } from "../di.symbols";
import { InfrastructureSymbols } from "src/infrastructure/di.symbols";
import { GenerateAccountNumber } from "src/infrastructure/shared/generate-account-number";
import { CreateAmountUseCase } from "../amount";
import { GenerateIdentifierUseCase } from "../Identifier";

export interface CreateBankAccountUseCase {
    execute(params: CreateBankAccountDto): Promise<BankAccount>;
}

export class CreateBankAccountUseCaseImpl implements CreateBankAccountUseCase  {
    constructor(
        @Inject(UseCaseSymbols.GenerateIdentifierUseCase) private readonly generateIdentifierUseCase: GenerateIdentifierUseCase,
        @Inject(RepositorySymbols.CreateBankAccountRepository) private readonly bankAccountRepository: BankAccountRepository,
        @Inject (UseCaseSymbols.CreateUserUseCase) private readonly createUserUseCase: CreateUserUseCase,
        @Inject(InfrastructureSymbols.GenerateAccountNumber) private readonly generateAccountNumber: GenerateAccountNumber,
        @Inject(UseCaseSymbols.CreateAmountUseCase) private readonly createAmountUseCase: CreateAmountUseCase
    ) {}

    public async execute(params: CreateBankAccountDto) {
        const id = await this.generateIdentifierUseCase.execute();
        const user = await this.createUserUseCase.execute({
            address: params.address,
            firstname: params.firstName,
            lastname: params.lastName,
            pnfl: params.pnfl
        });
        const accountNumber = this.generateAccountNumber.generate();
        const amount = await this.createAmountUseCase.execute();

        const newBankAccount = new BankAccount(id, 1, user, accountNumber, amount, BankAccountType.Business, BankAccountStatus.Active, new Date());
        await this.bankAccountRepository.save(newBankAccount);
        return newBankAccount;
    }
}