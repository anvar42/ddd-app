import { Module } from "@nestjs/common";
import { CreateBankAccountControllerImpl } from "./bank-account/controllers";
import { UseCaseProviders } from "src/use-cases/use-case.provider";
import { infrastructureModule } from "src/infrastructure/infrastructure.module";
import { RepositoryProviders } from "src/repositories";
import { ResenterProviders } from "src/presenters/presenter.provider";

@Module({
    imports: [infrastructureModule],
    controllers: [
        CreateBankAccountControllerImpl
    ],
    providers: [
        ...UseCaseProviders, ...RepositoryProviders, ...ResenterProviders
    ]
})
export class ApiModule {}