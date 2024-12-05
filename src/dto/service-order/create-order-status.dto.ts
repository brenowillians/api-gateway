import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreateOrderStatusDto {

@ApiProperty()
@IsNotEmpty({message:"CAMPO idOrder OBRIGATÓRIO"})
idOrder: number;

@ApiProperty()
@IsNotEmpty({message:"CAMPO idStatus OBRIGATÓRIO"})
@IsInt()
idStatus: number;

@ApiProperty()
@IsNotEmpty({message:"CAMPO description OBRIGATÓRIO"})
description: string;

@ApiProperty()
@IsNotEmpty({message:"CAMPO createdId OBRIGATÓRIO"})
createdId: number;

@ApiProperty()
@IsOptional()
updatedId: number | null;

}  
