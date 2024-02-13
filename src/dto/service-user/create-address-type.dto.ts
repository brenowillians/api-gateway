import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';

export class CreateAddressTypeDto {

     
    @IsNotEmpty({message:"CAMPO DESCRIPTION OBRIGATÓRIO"})
    description: string ;

  }  
