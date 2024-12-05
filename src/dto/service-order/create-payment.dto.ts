import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreatePaymentDto  {

  @ApiProperty()
  @IsNotEmpty({message:"CAMPO idOrder OBRIGATÓRIO"})
    idOrder: number;
     
    @ApiProperty()
    @IsNotEmpty({message:"CAMPO idOrder OBRIGATÓRIO"})
    value: number;

    @ApiProperty()
    @IsOptional()
    processed: boolean ;
    
    @ApiProperty()
    @IsOptional()
    concluded: boolean ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO idOrder OBRIGATÓRIO"})
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;
    
  }  
