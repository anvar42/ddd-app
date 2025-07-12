import { Provider } from "@nestjs/common";
import { FactorySymbols } from "./di-symbols";
import { UserFactoryImpl } from "./user";
import { BankAccountFactoryImpl } from "./bank-account";
import { IdentifierFactoryImpl } from "./identifier";
import { CardFactoryImpl } from "./card";

export const FactoryProviders: Provider[] = [
    {
        provide: FactorySymbols.UserFactory,
        useClass: UserFactoryImpl
    },
    {
        provide: FactorySymbols.BankAccountFactory,
        useClass: BankAccountFactoryImpl,
    },
    {
        provide: FactorySymbols.IdentifierFactory,
        useClass: IdentifierFactoryImpl,
    },
    {
        provide: FactorySymbols.CardFactory,
        useClass: CardFactoryImpl
    }
];
