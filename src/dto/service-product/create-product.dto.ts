import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateProductDto {


    
    @ApiProperty() 
    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string ;

    @ApiProperty()
    @IsOptional()
    active: boolean ;
    
    @ApiProperty()
    @IsNotEmpty({message:"CAMPO CREATEDID OBRIGATÓRIO"})
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO IMAGE OBRIGATÓRIO"})
    image: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO FULLPRICE OBRIGATÓRIO"})
    fullPrice: number;

    @ApiProperty()
    @IsOptional()
    salePrice: number | null;

    @ApiProperty()
    @IsOptional()
    onSale: boolean ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO DESCRIPTION OBRIGATÓRIO"})
    description: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO IDBRAND OBRIGATÓRIO"})
    idBrand: number;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO IDCATEGORY OBRIGATÓRIO"})
    idCategory: number;
    
    
  }  