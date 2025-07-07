import { randomUUID } from "crypto";

export interface GenerateAccountNumber {
    generate(): string;
}

export class GenerateAccountNumberImpl implements GenerateAccountNumber {
    public generate(): string {
        return randomUUID();
    }
}