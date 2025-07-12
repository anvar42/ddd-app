import { Provider } from "@nestjs/common";
import { UseCaseSymbols } from "./di.symbols";
import { CreateBankAccountUseCaseImpl, GetAllBankAccountUseCaseImpl } from "./bank-account";
import { CreateAmountUseCaseImpl } from "./amount";
import { CreateUserUseCaseImpl } from './user';

export const UseCaseProviders: Provider[] = [
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
    },
    {
        provide: UseCaseSymbols.GetAllBankAccountUseCase,
        useClass: GetAllBankAccountUseCaseImpl,
    }
];
