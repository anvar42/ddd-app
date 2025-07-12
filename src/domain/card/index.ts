import { Identifier } from "../Identifier";
import { User } from '../user';

export class Card {
    constructor(
        private id: Identifier,
        private owner: User,
        private cardNumber: string,
        private expirationDate: string,
        private _pinCodeHash: string,
        private cardType: CardType,
        private balance: number = 0,
        private status: CardStatus = CardStatus.ACTIVE,
        private updatedAt: Date = new Date(),
        private createdAt: Date = new Date(),
        private isVirtual: boolean  = false,
        private isFrozen: boolean  = false,
    ) {}

    public getID() {
        return this.id;
    }

    public getOwner() {
        return this.owner;
    }

    public getCardNumber() {
        return this.cardNumber;
    }

    public getExpirationDate() {
        return this.expirationDate;
    }

    public getBalance() {
        return this.balance;
    }

    public getStatus() {
        return this.status;
    }

    public getIsVirtual() {
        return this.isVirtual;
    }

    public getIsFrozen() {
        return this.isFrozen;
    }

    public getCardType() {
        return this.cardType;
    }

    public getCreatedAt() {
        return this.createdAt;
    }
}

export enum CardStatus {
    ACTIVE =  'active',
    BLOCED = 'blocked',
    EXPIRED = 'expired',
}

export type CardType = 'UzCard' | 'Humo' | 'VISA' | 'MasterCard';