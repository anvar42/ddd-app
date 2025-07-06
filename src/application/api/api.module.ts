import { Module } from "@nestjs/common";
import { CreateBankAccountControllerImpl } from "./bank-account/controllers/bank-account";
import { CreateBankAccountUseCaseImpl, UseCaseSymbols } from "src/use-cases";
import { RepositorySymbols } from "src/repositories/di.symbols";
import { BankAccountRepositoryImpl } from "src/infrastructure/database/in-memory/repository/create.bank-account";
import { GetBankAccountUseCaseImpl } from "src/use-cases/bank-account/get.bank-accounts";

@Module({
    controllers: [
        CreateBankAccountControllerImpl
    ],
    providers: [
        {
            provide: UseCaseSymbols.CreateBankAccountUseCase,
            useClass: CreateBankAccountUseCaseImpl
        },
        {
            provide: RepositorySymbols.CreateBankAccountRepository,
            useClass: BankAccountRepositoryImpl
        },
        {
            provide: UseCaseSymbols.GetAllBankAccountUseCase,
            useClass: GetBankAccountUseCaseImpl
        }
    ]
})
export class ApiModule {}