import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateGroupDto{


    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string ;
      
    @IsOptional()
    @IsBoolean()
    isAdmin: boolean | null;

  }