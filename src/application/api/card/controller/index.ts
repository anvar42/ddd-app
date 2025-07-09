import { Controller, Inject, Post } from "@nestjs/common";

@Controller("card")
export class CardController {
    constructor(
        // @Inject()
    ) {}

    @Post()
    createCard() {
        return this
    }
}