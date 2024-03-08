import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaUserSiteDto {
    
    @ApiProperty()
    @IsNotEmpty()
    login: string ;

    @ApiProperty()
    @IsNotEmpty()
    password: string ;
  
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    locked: boolean | null;

    @ApiProperty()
    @IsNotEmpty()
    name: string ;

    @ApiProperty()
    @IsOptional()
    birthday: string | null;
  
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
    id_number: string | null;

    @ApiProperty()
    @IsNotEmpty()
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