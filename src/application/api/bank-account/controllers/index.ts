import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CreateBankAccountDto } from "../dto/create.bank-account.dto";
import { CreateBankAccountUseCase } from "src/use-cases/bank-account/create.bank-account";
import { UseCaseSymbols } from "src/use-cases";
import { ApiTags } from "@nestjs/swagger";
import { GetAllBankAccountUseCase } from "src/use-cases/bank-account/get.bank-accounts";

@ApiTags('Bank Account')
@Controller("bank-account")
export class CreateBankAccountControllerImpl {
    constructor(
        @Inject(UseCaseSymbols.CreateBankAccountUseCase) private readonly createBankUseCase: CreateBankAccountUseCase,
        @Inject(UseCaseSymbols.GetAllBankAccountUseCase) private readonly getAllBankAccountUseCase: GetAllBankAccountUseCase,
    ) {}
    
    @Post()
    public async execute(@Body() params: CreateBankAccountDto) {
        return this.createBankUseCase.execute(params);
    };

    @Get()
    public async getAllBankAccounts() {
        return this.getAllBankAccountUseCase.execute();
    }
}
