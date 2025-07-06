import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator"

export class CreateBankAccountDto {
    @ApiProperty({
        example: "Anvar",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @ApiProperty({
        example: "Abd",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @ApiProperty({
        example: "Toshkent shaxar, Mirzo ulug'bek tumani olmaliq ko'chasi 5 uy",
        required: true,
    })
    @IsNotEmpty()
    @IsString()
    address: string;

    @ApiProperty({
        example: "12345671234567",
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    pnfl: string;
}
