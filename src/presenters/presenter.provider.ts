import { Provider } from "@nestjs/common";
import { PresenterSymbols } from "./di-symbols";
import { BankAccountPresenterImpl } from './bank-account';

export const ResenterProviders: Provider[] = [
    {
        provide: PresenterSymbols.BankAccountPresenter,
        useClass: BankAccountPresenterImpl
    }
];
