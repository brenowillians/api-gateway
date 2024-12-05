import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateOrderItemDto {


    @ApiProperty()
    @IsNotEmpty({message:"CAMPO idOrder OBRIGATÓRIO"})
    idOrder: number;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO idProduct OBRIGATÓRIO"})
    idProduct: number;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO quantity OBRIGATÓRIO"})
    quantity: number;
    
    @ApiProperty()
    @IsNotEmpty({message:"CAMPO productName OBRIGATÓRIO"})
    productName: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO price OBRIGATÓRIO"})
    price: number;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO createdId OBRIGATÓRIO"})
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;
    

  }  
