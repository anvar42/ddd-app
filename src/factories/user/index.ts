import { Inject } from "@nestjs/common";
import { Address, User } from "src/domain";
import { FactorySymbols } from "../di-symbols";
import { IdentifierFactory } from "../identifier";

export interface UserFactory {
    restore(params: UserParams): User
}

export type UserParams = {
    id?: string,
    firstname: string,
    lastname: string,
    pnfl: string,
    phoneNumber: string,
    address: string,
    createdAt?: Date,
}

export class UserFactoryImpl implements UserFactory {
    constructor(
        @Inject(FactorySymbols.IdentifierFactory) private readonly identifierFactory: IdentifierFactory
    ) {}

    public restore(params: UserParams) {
        return new User(
            this.identifierFactory.generate(params.id),
            params.firstname,
            params.lastname,
            params.pnfl,
            params.phoneNumber,
            new Address(params.address)
        )
    }
}