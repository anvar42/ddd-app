import { Provider } from "@nestjs/common";
import { RepositorySymbols } from "./di.symbols";
import { BankAccountRepositoryImpl } from "src/infrastructure/database/in-memory";

export const RepositoryProviders: Provider[] = [
    {
        provide: RepositorySymbols.CreateBankAccountRepository,
        useClass: BankAccountRepositoryImpl
    }
];
