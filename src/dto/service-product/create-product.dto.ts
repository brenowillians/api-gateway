import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateProductDto {


    
     
    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string ;

    @IsOptional()
    active: boolean ;
    
    @IsNotEmpty({message:"CAMPO CREATEDID OBRIGATÓRIO"})
    createdId: number;

    @IsOptional()
    updatedId: number | null;

    @IsNotEmpty({message:"CAMPO IMAGE OBRIGATÓRIO"})
    image: string ;

    @IsNotEmpty({message:"CAMPO FULLPRICE OBRIGATÓRIO"})
    fullPrice: number;

    @IsOptional()
    salePrice: number | null;

    @IsOptional()
    onSale: boolean ;

    @IsNotEmpty({message:"CAMPO DESCRIPTION OBRIGATÓRIO"})
    description: string ;

    @IsNotEmpty({message:"CAMPO IDBRAND OBRIGATÓRIO"})
    idBrand: number;

    @IsNotEmpty({message:"CAMPO IDCATEGORY OBRIGATÓRIO"})
    idCategory: number;
    
    
  }  