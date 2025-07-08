import { Provider } from "@nestjs/common";
import { PresenterSymbols } from "./di-symbols";
import { ReturnTypeCreatedBankAccountImpl } from "./bank-account";

export const ResenterProviders: Provider[] = [
    {
        provide: PresenterSymbols.ReturnTypeCreatedBankAccount,
        useClass: ReturnTypeCreatedBankAccountImpl
    }
];
