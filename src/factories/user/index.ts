import { Inject } from "@nestjs/common";
import { Address, User } from "src/domain";
import { IdentifierFactory } from "../identifier";
import { FactorySymbols } from "../di-symbols";

export type UserParams = {
    id?: string,
    firstName: string,
    lastName: string,
    pnfl: string,
    address: string,
}

export interface UserFactory {
    restore(params: UserParams): User
}

export class UserFactoryImpl implements UserFactory {
    constructor(
        @Inject(FactorySymbols.IdentifierFactory) private readonly identifierFactory: IdentifierFactory
    ){}

    public restore(params: UserParams) {
        const id = this.identifierFactory.generate();
        return new User(
            id,
            params.firstName,
            params.lastName,
            params.pnfl,
            new Address(params.address),
        )
    }
}