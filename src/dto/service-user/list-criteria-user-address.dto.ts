import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaUserAddressDto {
    
    @ApiProperty()
    @IsNotEmpty()
    idUser: number;

    @ApiProperty()
    @IsNotEmpty()
    street: string ;
      
    @ApiProperty()
    @IsNotEmpty()
    number: string ;

    @ApiProperty()
    @IsNotEmpty()
    zipCode: string ;

    @ApiProperty()
    @IsNotEmpty()
    city: string ;

    @ApiProperty()
    @IsNotEmpty()
    state: string ;

    @ApiProperty()
    @IsNotEmpty()
    country: string ;
    
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