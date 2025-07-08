import { Identifier } from "../Identifier";

export class Card {
    constructor(
        private id: Identifier,
        private ownerId: string,
        private cardNumber: string,
        private cardHolderName: string,
        private expirationDate: string,
        private cvv: string,
        private pinCodeHash: string,
        private balance: number = 0,
        private status: CardStatus = CardStatus.ACTIVE,
        private updatedAt: Date = new Date(),
        private createdAt: Date = new Date(),
        private isVirtual: boolean  = false,
        private isFrozen: boolean  = false,
        private cardType: 'UzCard' | 'Humo' | 'VISA' | 'MasterCard',
    ) {}

    public getID() {
        return this.id;
    }

    public ownerID() {
        return this.ownerId;
    }
}

export enum CardStatus {
    ACTIVE =  'active',
    BLOCED = 'blocked',
    EXPIRED = 'expired',
}
