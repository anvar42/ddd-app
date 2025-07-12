import { Inject } from "@nestjs/common";
import * as Domain from "../../domain";
import { FactorySymbols } from "../di-symbols";
import { IdentifierFactory } from "../identifier";
import { Card, User } from '../../domain';

export interface CardFactory {
    restore(params: CardParams): Card;
}

export type CardParams = {
    owner: User,
    cardNumber: string,
}

export class CardFactoryImpl implements CardFactory {
    constructor(
        @Inject(FactorySymbols.IdentifierFactory) private readonly identifierFactory: IdentifierFactory,
    ) {}

    public restore(params: CardParams) {
        return new Domain.Card(
            this.identifierFactory.generate(),
            params.owner,
            params.cardNumber,
            this.getExpirationDate(),
            this.getPinHashCode(),
            'Humo'
        )
    }

    private getExpirationDate() {
      const now = new Date();
      const expiration = new Date(now.setFullYear(now.getFullYear() + 5));
      return `${expiration.getMonth() + 1}/${expiration.getFullYear().toString().slice(-2)}`;
    }

    public getPinHashCode() {
      return "1111"
    }
}
