import { BankAccount } from "src/domain";

export interface BaseController<T> {
    execute: (params?: T) => Promise<BankAccount >; 
}
