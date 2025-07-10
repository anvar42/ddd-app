import { Inject } from "@nestjs/common";
import { CreateCardDto } from "src/application";
import { Card } from "src/domain";
import { FactorySymbols, IdentifierFactory } from "src/factories";

export interface CreateCardUseCase {
    // execute(dto: CreateCardDto): Promise<Card>;
}

export class CreateBankCardUseCaseImple implements CreateCardUseCase {
    constructor(
        @Inject(FactorySymbols.IdentifierFactory) private readonly identifierFactory : IdentifierFactory,
    ) {}

    // public async execute(dto: CreateCardDto): Promise<Card> {
    //     const id = this.identifierFactory.generate();
    //     // const newCard = await new Card(id, dto.ownerId, )
    // }
}