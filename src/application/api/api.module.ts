import { Module } from "@nestjs/common";
import { CreateBankAccountControllerImpl } from "./bank-account/controllers/bank-account";
import { RepositorySymbols } from "src/repositories/di.symbols";
import { BankAccountRepositoryImpl } from "src/infrastructure/database/in-memory/repository/create.bank-account";
import { GetBankAccountUseCaseImpl } from "src/use-cases/bank-account/get.bank-accounts";
import { UseCaseProviders } from "src/use-cases/use-case.provider";

@Module({
    controllers: [
        CreateBankAccountControllerImpl
    ],
    providers: [...UseCaseProviders]
})
export class ApiModule {}