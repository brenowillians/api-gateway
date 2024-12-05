import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreateOrderDto {
    
  @ApiProperty()
    @IsNotEmpty({message:"CAMPO orderDate OBRIGATÓRIO"})
    orderDate: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO idUserSite OBRIGATÓRIO"})
    idUserSite: number;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO details OBRIGATÓRIO"})
    details: string ;

    @ApiProperty()
    @IsOptional()
    active: boolean ;
    
    @ApiProperty()
    @IsNotEmpty({message:"CAMPO createdId OBRIGATÓRIO"})
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;
    
  }  
