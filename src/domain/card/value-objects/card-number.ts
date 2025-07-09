
export class CardNumber {
  private readonly value: string;

  constructor(value: string) {
    if (!/^\d{16}$/.test(value)) {
      throw new Error('Card number must be 16 digits');
    }
    this.value = value;
  }

  public getValue(): string {
    return this.value;
  }
}