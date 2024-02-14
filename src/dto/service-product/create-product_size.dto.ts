import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateProductSizeDto  {



@IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
idProduct: number;
 
@IsNotEmpty({message:"CAMPO IDSIZE OBRIGATÓRIO"})
idSize: number;

@IsOptional()
available: boolean ;

@IsNotEmpty({message:"CAMPO CREATEDID OBRIGATÓRIO"})
createdId: number;

@IsOptional()
updatedId: number | null;

  
}  