import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateProductSizeDto {

@ApiProperty()
@IsOptional()
idProduct: number;
 
@ApiProperty()
@IsOptional()
idSize: number;

@ApiProperty()
@IsOptional()
@IsBoolean()
available: boolean ;

@ApiProperty()
@IsOptional()
createdId: number;

@ApiProperty()
@IsOptional()
updatedId: number | null;

  
} 