import { Inject } from "@nestjs/common";
import { Identifier } from "src/domain";
import { InfrastructureSymbols } from "src/infrastructure/di.symbols";
import { IdentifierGenerator } from "src/infrastructure/shared/uuid-generator";

export interface GenerateIdentifierUseCase {
    execute(): Promise<Identifier>;
}

export class GenerateIdentifierUseCaseImpl implements GenerateIdentifierUseCase {
    constructor(
        @Inject(InfrastructureSymbols.IdentifierGenerator) private readonly identifierGenerator: IdentifierGenerator,
    ) {}

    public async execute(): Promise<Identifier> {
        const uuid = this.identifierGenerator.generate()
        const identifier = new Identifier(uuid);
        return identifier;
    }
}