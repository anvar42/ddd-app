import { Provider } from "@nestjs/common";
import { PresenterSymbols } from "./di-symbols";
import { BankAccountPresenterImpl } from './bank-account';
import { CardPresenterImpl } from './card';

export const ResenterProviders: Provider[] = [
    {
        provide: PresenterSymbols.BankAccountPresenter,
        useClass: BankAccountPresenterImpl
    },
    {
      provide: PresenterSymbols.CardPresenter,
      useClass: CardPresenterImpl
    }
];
