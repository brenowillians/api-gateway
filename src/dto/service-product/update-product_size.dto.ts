import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';


export class UpdateProductSizeDto {


@IsOptional()
idProduct: number;
 
@IsOptional()
idSize: number;

@IsOptional()
@IsBoolean()
available: boolean ;

@IsOptional()
createdId: number;

@IsOptional()
updatedId: number | null;

  
} 