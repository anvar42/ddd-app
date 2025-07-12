import { Inject, UnauthorizedException } from '@nestjs/common';
import { CreateCardDto } from 'src/application';
import { CardFactory, CardNumberFactory, FactorySymbols } from 'src/factories';
import { Card } from '../../domain';
import { RepositorySymbols } from '../../repositories';
import { UserRepository } from '../../repositories/user';

export interface CreateCardUseCase {
  execute(dto: CreateCardDto): Promise<Card>;
}

export class CreateCardUseCaseImpl implements CreateCardUseCase {
  constructor(
    @Inject(FactorySymbols.CardNumberFactory)
    private readonly cardNumberFactory: CardNumberFactory,
    @Inject(FactorySymbols.CardFactory)
    private readonly cardFactory: CardFactory,
    @Inject(RepositorySymbols.UserRepository) private readonly userRepository: UserRepository,
  ) {}

  public async execute(dto: CreateCardDto): Promise<Card> {
    const user = await this.userRepository.getUser(dto.ownerId);

    if (!user) {
      throw new UnauthorizedException();
    }

    const cardNumber = this.cardNumberFactory.restore();
    return this.cardFactory.restore({
      owner: user,
      cardNumber: cardNumber.getValue(),
    });
  }
}
