import { Inject } from "@nestjs/common";
import * as Domain from "../../domain";
import { FactorySymbols } from "../di-symbols";
import { IdentifierFactory } from "../identifier";

export interface CardFactory {
    restore(params: CardParams): Domain.Card;
}

export type CardParams = {
    ownerId: string,
    cardNumber: string,
    cardHolderName: string,
    expirationDate: string,
    cvv: string,
    pinCodeHash: string,
    isVirtual: boolean,
    cardType: Domain.CardType
}

export class CardFactoryImpl implements CardFactory {
    constructor(
        @Inject(FactorySymbols.IdentifierFactory) private readonly identifierFactory: IdentifierFactory
    ) {}

    public restore(params: CardParams): Domain.Card {
        // return new Domain.Card(
        //     this.identifierFactory.generate(),
        //     params.ownerId,

        // )
    }
}
