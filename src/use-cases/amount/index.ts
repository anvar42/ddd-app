import { Amount } from '../../domain';

export interface CreateAmountUseCase {
    execute(): Promise<Amount>;
}

export class CreateAmountUseCaseImpl implements CreateAmountUseCase {
    public async execute(): Promise<Amount> {
        const amount = new Amount(0);
        return amount;
    }
}