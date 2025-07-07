import { Provider } from "@nestjs/common";
import { UseCaseSymbols } from "./di.symbols";
import { GenerateIdentifierUseCaseImpl } from "./Identifier";
import { CreateUserUseCaseImpl } from "./user/create";
import { CreateBankAccountUseCaseImpl } from "./bank-account";
import { CreateAmountUseCaseImpl } from "./amount";

export const UseCaseProviders: Provider[] = [
    {
        provide: UseCaseSymbols.GenerateIdentifierUseCase,
        useClass: GenerateIdentifierUseCaseImpl,
    },
    {
        provide: UseCaseSymbols.CreateUserUseCase,
        useClass: CreateUserUseCaseImpl,
    },
    {
        provide: UseCaseSymbols.CreateBankAccountUseCase,
        useClass: CreateBankAccountUseCaseImpl,
    },
    {
        provide: UseCaseSymbols.CreateAmountUseCase,
        useClass: CreateAmountUseCaseImpl
    }
];
