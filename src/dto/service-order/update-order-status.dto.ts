import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderStatusDto {

    
@ApiProperty()
@IsOptional()
idOrder: number;

@ApiProperty()
@IsOptional()
@IsInt()
idStatus: number;

@ApiProperty()
@IsOptional()
description: string;

@ApiProperty()
@IsOptional()
createdId: number;

@ApiProperty()
@IsOptional()
updatedId: number | null;


}  
