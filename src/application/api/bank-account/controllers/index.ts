import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateBankAccountUseCase } from "src/use-cases/bank-account/create.bank-account";
import { UseCaseSymbols } from "src/use-cases";
import { ApiTags } from "@nestjs/swagger";
import { GetAllBankAccountUseCase } from "src/use-cases/bank-account/get.bank-accounts";
import { BankAccountPresenter, PresenterSymbols } from '../../../../presenters';
import { CreateBankAccountDto } from '../dto';

@ApiTags('Bank-Account')
@Controller("bank-account")
export class BankAccountController {
    constructor(
        @Inject(UseCaseSymbols.CreateBankAccountUseCase) private readonly createBankUseCase: CreateBankAccountUseCase,
        @Inject(UseCaseSymbols.GetAllBankAccountUseCase) private readonly getAllBankAccountUseCase: GetAllBankAccountUseCase,
        @Inject(PresenterSymbols.BankAccountPresenter) private  readonly bankAccountPresenter: BankAccountPresenter,
    ) {}
    
    @Post()
    public async execute(@Body() params: CreateBankAccountDto) {
        const bankAccount = await this.createBankUseCase.execute(params);
        return this.bankAccountPresenter.printForExternal(bankAccount);
    };

    @Get()
    public async getAllBankAccounts() {
        return this.getAllBankAccountUseCase.execute();
    }
}
