import { randomUUID } from "crypto";
import { Identifier } from "src/domain";

export interface IdentifierFactory {
    generate(id?: string): Identifier
}

export class IdentifierFactoryImpl implements IdentifierFactory {
    public generate(id?: string): Identifier {
        if (id) {
            return new Identifier(id);
        }

        return new Identifier(randomUUID());
    }
}
