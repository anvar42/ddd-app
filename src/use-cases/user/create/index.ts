import { Inject } from "@nestjs/common";
import { User } from "src/domain";
import { FactorySymbols, UserFactory, UserParams } from 'src/factories';
import { RepositorySymbols, UserRepository } from '../../../repositories';


export interface CreateUserUseCase {
    execute(params: UserParams): Promise<User>
}

export class CreateUserUseCaseImpl implements CreateUserUseCase {
    constructor(
       @Inject(FactorySymbols.UserFactory) private readonly userFactory: UserFactory,
       @Inject(RepositorySymbols.UserRepository)private readonly userRepository: UserRepository,
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
