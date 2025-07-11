import { Identifier } from "../Identifier";

export class Card {
    constructor(
        private id: Identifier,
        private ownerId: string,
        private cardNumber: string,
        private cardHolderName: string,
        private expirationDate: string,
        private cvv: string,
        private _pinCodeHash: string,
        private balance: number = 0,
        private status: CardStatus = CardStatus.ACTIVE,
        private updatedAt: Date = new Date(),
        private createdAt: Date = new Date(),
        private isVirtual: boolean  = false,
        private isFrozen: boolean  = false,
        private cardType: CardType,
    ) {}

    public getID() {
        return this.id;
    }

    public ownerID() {
        return this.ownerId;
    }

    public getCardNumber() {
        return this.cardNumber;
    }

    public getCardHolderName() {
        return this.cardHolderName;
    }


    public getExpirationDate() {
        return this.expirationDate;
    }

    public getCvv() {
        return this.cvv;
    }

    public getBalance() {
        return this.balance;
    }

    public getstatus() {
        return this.status;
    }

    public getisVirtual() {
        return this.isVirtual;
    }

    public getisFrozen() {
        return this.isFrozen;
    }

    public getcardType() {
        return this.cardType;
    }

    public getcreatedAt() {
        return this.createdAt;
    }
}

export enum CardStatus {
    ACTIVE =  'active',
    BLOCED = 'blocked',
    EXPIRED = 'expired',
}

export type CardType = 'UzCard' | 'Humo' | 'VISA' | 'MasterCard';