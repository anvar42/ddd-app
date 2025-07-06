import { CreateBankAccountDto } from "src/application/api/bank-account/dto/create.bank-account.dto";
import { BankAccountRepository } from "src/repositories/bank-account";
import { randomUUID } from "crypto";
import { Address, BankAccount, BankAccountStatus, BankAccountType, Identifier, User } from "src/domain";
import { Amount } from "src/domain/amount";
import { Inject } from "@nestjs/common";
import { RepositorySymbols } from "src/repositories/di.symbols";

export interface CreateBankAccountUseCase {
    execute(params: CreateBankAccountDto): Promise<BankAccount>;
}

export class CreateBankAccountUseCaseImpl implements CreateBankAccountUseCase  {
    constructor(
        @Inject(RepositorySymbols.CreateBankAccountRepository) private readonly bankAccountRepository: BankAccountRepository,
    ) {}

    public async execute(params: CreateBankAccountDto) {
        const id1 = new Identifier(randomUUID());
        const id2 = new Identifier(randomUUID());
        const id3 = new Identifier(randomUUID());
        
        const accountNumber = randomUUID();
        const amount = new Amount(0);
        const address = new Address(id3, params.address);
        const user = new User(id2, params.firstName, params.lastName, params.pnfl, address);

        const newBankAccount = new BankAccount(id1, 1, user, accountNumber, amount, BankAccountType.Business, BankAccountStatus.Active, new Date());
        await this.bankAccountRepository.save(newBankAccount);
        return newBankAccount;
    }
}