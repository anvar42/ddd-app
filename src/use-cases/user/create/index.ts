import { Inject } from "@nestjs/common";
import { Address, User } from "src/domain";
import { FactorySymbols, IdentifierFactory } from "src/factories";

export interface CreateUserDto {
    firstname: string
    lastname: string
    pnfl: string
    address: string
}

export interface CreateUserUseCase {
    execute(params: CreateUserDto): Promise<User>
}

export class CreateUserUseCaseImpl implements CreateUserUseCase {
    constructor(
       @Inject(FactorySymbols.IdentifierFactory) private readonly identifierFactory : IdentifierFactory,
    ) {}

    public async execute(params: CreateUserDto) {
        const identifier = await this.identifierFactory.generate();
        const address = new Address(identifier, params.address);
        const createdAt = new Date();

        const newUser = new User(identifier, params.firstname, params.lastname, params.pnfl, address, createdAt);

        return newUser;
    }
}
