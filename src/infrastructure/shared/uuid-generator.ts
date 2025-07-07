import { randomUUID } from "crypto";

export interface IdentifierGenerator {
  generate(): string;
}

export class IdentifierGeneratorImpl implements IdentifierGenerator {
    public generate(): string {
        return randomUUID();
    }
}