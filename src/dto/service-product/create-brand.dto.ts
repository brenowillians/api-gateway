
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreateBrandDto {

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
    
   
  }  
