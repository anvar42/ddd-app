import { Module } from "@nestjs/common";
import { InfrastructureSymbols } from "./di.symbols";
import { IdentifierGeneratorImpl } from "./shared/uuid-generator";
import { GenerateAccountNumberImpl } from "./shared/generate-account-number";
import { UserRepositoryImpl } from './database/in-memory/repository/create.user';

@Module({
    providers: [
        {
            provide: InfrastructureSymbols.IdentifierGenerator,
            useClass: IdentifierGeneratorImpl
        },
        {
            provide: InfrastructureSymbols.GenerateAccountNumber,
            useClass: GenerateAccountNumberImpl,
        },
        {
          provide: InfrastructureSymbols.UserRepository,
          useClass: UserRepositoryImpl,
        }
    ],
    exports: [
        InfrastructureSymbols.IdentifierGenerator,
        InfrastructureSymbols.GenerateAccountNumber,
        InfrastructureSymbols.UserRepository,
    ]
})
export class infrastructureModule {}
