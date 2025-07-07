import { Module } from "@nestjs/common";
import { InfrastructureSymbols } from "./di.symbols";
import { IdentifierGeneratorImpl } from "./shared/uuid-generator";
import { GenerateAccountNumberImpl } from "./shared/generate-account-number";

@Module({
    providers: [
        {
            provide: InfrastructureSymbols.IdentifierGenerator,
            useClass: IdentifierGeneratorImpl
        },
        {
            provide: InfrastructureSymbols.GenerateAccountNumber,
            useClass: GenerateAccountNumberImpl,
        }
    ]
})
export class infrastructureModule {}