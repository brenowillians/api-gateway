import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateRuleDto {

    @IsNotEmpty({message:"CAMPO DESCRIPTION OBRIGATÓRIO"})
    description: string ;


  }  