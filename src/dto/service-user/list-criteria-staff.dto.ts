import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaStaffDto {
    
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    login: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    active: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    locked: boolean;

    @ApiProperty()
    @IsNotEmpty()
    sector: string;

    @ApiProperty()
    @IsNotEmpty()
    role: string;

    @ApiProperty()
    @IsNotEmpty()
    id_number: string;

    @ApiProperty()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty()
    @IsOptional()
    ctps: string;

    @ApiProperty()
    @IsOptional()
    phone: string;

    @ApiProperty()
    @IsOptional()
    mobile: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    items: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    page: number;

    @ApiProperty()
    @IsNotEmpty()
    //ordenar por propriedades indiscriminadas da entidade
    order: { [key: string]: string }

}