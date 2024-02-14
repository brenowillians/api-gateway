
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreateBrandDto {

        
    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string ;

    @IsOptional()
    active: boolean ;
    
    @IsNotEmpty({message:"CAMPO CREATEDID OBRIGATÓRIO"})
    createdId: number;

    @IsOptional()
    updatedId: number | null;
    
   
  }  
