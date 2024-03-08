import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaProductDto {

    @ApiProperty()
    @IsOptional()
    name: string ;

    @ApiProperty()
    @IsOptional()
    image: string ;

    @ApiProperty()
    @IsOptional()
    fullPrice: number;

    @ApiProperty()
    @IsOptional()
    salePrice: number | null;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    onSale: boolean ;

    @ApiProperty()
    @IsOptional()
    description: string ;
    
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