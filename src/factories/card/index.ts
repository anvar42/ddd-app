import { Inject } from "@nestjs/common";
import * as Domain from "../../domain";
import { FactorySymbols } from "../di-symbols";
import { IdentifierFactory } from "../identifier";

export interface CardFactory {
    restore(params: Params): Domain.Card;
}

export class CardFactoryImpl implements CardFactory {
    constructor(
        @Inject(FactorySymbols.IdentifierFactory) private readonly identifierFactory: IdentifierFactory
    ) {}

    public restore(params: Params): Domain.Card {
        return new Domain.Card(
            this.identifierFactory.generate(),
            params.ownerId,
            new Domain.CardNumber("")
        )
    }
}

export interface Params {
    ownerId: string
}
