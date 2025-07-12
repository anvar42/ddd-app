import { CardNumber } from '../../domain';

export interface CardNumberFactory {
  restore(): CardNumber;
}

export class CardNumberFactoryImpl implements CardNumberFactory {
  public restore(): CardNumber {
    const bin = '860012';
    const accountPart = Math.floor(Math.random() * 1e9)
      .toString()
      .padStart(9, '0');
    const partial = bin + accountPart;
    const checkDigit = this.calculateLuhn(partial);
    return new CardNumber(partial + checkDigit);
  }

  private calculateLuhn(input: string): string {
    const digits = input.split('').map(Number).reverse();
    const sum = digits.reduce((acc, digit, idx) => {
      if (idx % 2 === 0) return acc + digit;
      const dbl = digit * 2;
      return acc + (dbl > 9 ? dbl - 9 : dbl);
    }, 0);
    const check = (10 - (sum % 10)) % 10;
    return check.toString();
  }
}
