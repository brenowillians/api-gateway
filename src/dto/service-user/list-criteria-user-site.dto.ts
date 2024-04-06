import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaUserSiteDto {
    
    @ApiProperty()
    @IsOptional()
    login: string ;

    @ApiProperty()
    @IsOptional()
    name: string ;

    @ApiProperty()
    @IsOptional()
    gender: string | null;

    @ApiProperty()
    @IsOptional()
    phone: string | null;

    @ApiProperty()
    @IsOptional()
    mobile: string | null;

    @ApiProperty()
    @IsOptional()
    cpf: string | null;
    
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