import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateProductSizeDto  {


@ApiProperty()
@IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
idProduct: number;

@ApiProperty()
@IsNotEmpty({message:"CAMPO IDSIZE OBRIGATÓRIO"})
idSize: number;

@ApiProperty()
@IsOptional()
available: boolean ;

@ApiProperty()
@IsNotEmpty({message:"CAMPO CREATEDID OBRIGATÓRIO"})
createdId: number;

@ApiProperty()
@IsOptional()
updatedId: number | null;

  
}  