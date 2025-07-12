import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateCardUseCase, UseCaseSymbols } from '../../../../use-cases';
import { CreateCardDto } from '../dto';
import { PresenterSymbols } from '../../../../presenters';
import { CardPresenter } from '../../../../presenters/card';

@ApiTags('Card')
@Controller("card")
export class CardController {
    constructor(
        @Inject(UseCaseSymbols.CreateCardUseCase) private readonly createCardUseCase: CreateCardUseCase,
        @Inject(PresenterSymbols.CardPresenter) private readonly cardPresenter: CardPresenter,
    ) {}

    @Post()
    public async createCard(@Body() dto: CreateCardDto) {
        const card = await this.createCardUseCase.execute(dto);
        return this.cardPresenter.toPrint(card);
    }
}