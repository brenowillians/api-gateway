import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreateStatusDto{
    
    @ApiProperty()
    @IsNotEmpty({message:"CAMPO orderDate OBRIGATÓRIO"})
    description: string ;
    
    @ApiProperty()
    @IsNotEmpty({message:"CAMPO orderDate OBRIGATÓRIO"})
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;
    
    
  }  