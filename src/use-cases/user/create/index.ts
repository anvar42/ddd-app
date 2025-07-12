import { Inject } from "@nestjs/common";
import { User } from "src/domain";
import { FactorySymbols, UserFactory, UserParams } from 'src/factories';
import { InfrastructureSymbols } from '../../../infrastructure/di.symbols';
import { UserRepository } from '../../../repositories/user';


export interface CreateUserUseCase {
    execute(params: UserParams): Promise<User>
}

export class CreateUserUseCaseImpl implements CreateUserUseCase {
    constructor(
       @Inject(FactorySymbols.UserFactory) private readonly userFactory: UserFactory,
       @Inject(InfrastructureSymbols.UserRepository)private readonly userRepository: UserRepository,
    ) {}

    public async execute(params: UserParams) {
        const user = this.userFactory.restore({
          firstname: params.firstname,
          lastname: params.lastname,
          pnfl: params.pnfl,
          address: params.address,
          phoneNumber: params.phoneNumber
        });
        await this.userRepository.save(user);
        return user;
    }
}
