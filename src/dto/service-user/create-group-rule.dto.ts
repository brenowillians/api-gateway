import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateGroupRuleDto {


    @IsNotEmpty({message:"CAMPO IDGROUP OBRIGATÓRIO"})
    idGroup: number;

    @IsNotEmpty({message:"CAMPO IDRULE OBRIGATÓRIO"})
    idRule: number;
      
    @IsOptional()
    @IsBoolean()
    isAllowed: boolean;

  }
