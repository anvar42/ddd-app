import { Module } from "@nestjs/common";
import { InfrastructureSymbols } from "./di.symbols";
import { IdentifierGeneratorImpl } from "./shared/uuid-generator";
import { GenerateAccountNumberImpl } from "./shared/generate-account-number";
import { RepositorySymbols } from '../repositories';
import { BankAccountPresenterImpl } from '../presenters';
import { UserRepositoryImpl } from './database/in-memory';

@Module({
    providers: [
        {
            provide: RepositorySymbols.BankAccountRepository,
            useClass: BankAccountPresenterImpl
        },
        {
            provide: InfrastructureSymbols.IdentifierGenerator,
            useClass: IdentifierGeneratorImpl
        },
        {
            provide: InfrastructureSymbols.GenerateAccountNumber,
            useClass: GenerateAccountNumberImpl,
        },
        {
          provide: RepositorySymbols.UserRepository,
          useClass: UserRepositoryImpl,
        },
    ],
    exports: [
        InfrastructureSymbols.IdentifierGenerator,
        InfrastructureSymbols.GenerateAccountNumber,
        RepositorySymbols.BankAccountRepository,
        RepositorySymbols.UserRepository,
    ]
})
export class infrastructureModule {}
