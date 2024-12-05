import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaOrderDto {
     
    @ApiProperty()
    @IsOptional()
    orderDate: string;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    idUserSite: number;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    active: boolean
     
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