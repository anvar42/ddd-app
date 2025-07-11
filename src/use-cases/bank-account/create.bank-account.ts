import { CreateBankAccountDto } from "src/application/api/bank-account/dto/create.bank-account.dto";
import { BankAccountRepository } from "src/repositories/bank-account";
import { BankAccount } from "src/domain";
import { Inject } from "@nestjs/common";
import { RepositorySymbols } from "src/repositories/di.symbols";
import { BankAccountFactory, FactorySymbols, UserFactory } from "src/factories";
import { UserRepository } from '../../repositories';

export interface CreateBankAccountUseCase {
    execute(params: CreateBankAccountDto): Promise<BankAccount>;
}

export class CreateBankAccountUseCaseImpl implements CreateBankAccountUseCase  {
    constructor(
        @Inject(RepositorySymbols.BankAccountRepository) private readonly bankAccountRepository: BankAccountRepository,
        @Inject (FactorySymbols.UserFactory) private readonly userFactory: UserFactory,
        @Inject(FactorySymbols.BankAccountFactory) private readonly bankAccountFactory: BankAccountFactory,
        @Inject(RepositorySymbols.UserRepository)private readonly userRepository: UserRepository,
    ) {}

    public async execute(params: CreateBankAccountDto) {
        const user = this.userFactory.restore({
            firstname: params.firstName,
            lastname: params.lastName,
            address: params.address,
            pnfl: params.pnfl,
            phoneNumber: params.phoneNumber,
        });
        await this.userRepository.save(user);
        const newBankAccount = this.bankAccountFactory.restore({
            owner: user,
        });

        console.log(newBankAccount, "newBankAccount");

        await this.bankAccountRepository.save(newBankAccount);
        return newBankAccount;
    }
}