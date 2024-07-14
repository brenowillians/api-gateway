import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaProductByCategoryDto {

    @ApiProperty()
    @IsNotEmpty()
    idCategory: number ;

    @ApiProperty()
    @IsOptional()
    idBrand: number ;

    @ApiProperty()
    @IsOptional()
    idSize: number;

    @ApiProperty()
    @IsOptional()
    fullPrice: number;

    @ApiProperty()
    // Controla se o preço vai ser maior ou menor(true/false) que o valor informado no parametro fullPrice 
    @IsOptional()
    @IsBoolean()
    isOverPrice: boolean ;

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