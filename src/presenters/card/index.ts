import { Card } from '../../domain';

export type CardPresenterExternalPrinted = {
  cardNumber: string;
  cardHoldName: string;
  expirationDate: string;
  cardType: string;
}

export interface CardPresenter {
  toPrint(entity: Card): Promise<CardPresenterExternalPrinted>;
}

export class CardPresenterImpl implements CardPresenter {

  public async toPrint(entity: Card): Promise<CardPresenterExternalPrinted> {
    return {
      cardHoldName: entity.getOwner().getFullName(),
      cardNumber: entity.getCardNumber(),
      expirationDate: entity.getExpirationDate(),
      cardType: entity.getCardType(),
    }
  }
}
