import { Inject } from "@nestjs/common";
import { Address, User } from "src/domain";
import { UseCaseSymbols } from "src/use-cases/di.symbols";
import { GenerateIdentifierUseCase } from "src/use-cases/Identifier";

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
       @Inject(UseCaseSymbols.GenerateIdentifierUseCase) private readonly generateIdentifierUseCase: GenerateIdentifierUseCase,
    ) {}

    public async execute(params: CreateUserDto) {
        const identifier = await this.generateIdentifierUseCase.execute();
        const address = new Address(identifier, params.address);
        const createdAt = new Date();

        const newUser = new User(identifier, params.firstname, params.lastname, params.pnfl, address, createdAt);

        return newUser;
    }
}
