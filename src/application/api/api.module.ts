import { Module } from "@nestjs/common";
import { BankAccountController } from './bank-account';
import { UseCaseProviders } from "src/use-cases/use-case.provider";
import { infrastructureModule } from "src/infrastructure/infrastructure.module";
import { ResenterProviders } from "src/presenters/presenter.provider";
import { FactoryProviders } from '../../factories/factory.provider';
import { CardController } from './card';

@Module({
    imports: [infrastructureModule],
    controllers: [
      BankAccountController,
      CardController
    ],
    providers: [
        ...UseCaseProviders, ...ResenterProviders, ...FactoryProviders
    ]
})
export class ApiModule {}