import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderItemDto  {

     
  @ApiProperty()
  @IsOptional()
    idOrder: number;

    @ApiProperty()
    @IsOptional()
    idProduct: number;

    @ApiProperty()
    @IsOptional()
    quantity: number;
    
    @ApiProperty()
    @IsOptional()
    productName: string ;

    @ApiProperty()
    @IsOptional()
    price: number;

    @ApiProperty()
    @IsOptional()
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;
    

  }