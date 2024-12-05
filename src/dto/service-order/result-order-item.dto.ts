
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultOrderItemDto {

    @ApiProperty()
    idOrderItem: number;

    @ApiProperty()
    idOrder: number;

    @ApiProperty()
    idProduct: number;

    @ApiProperty()
    quantity: number;
    
    @ApiProperty()
    productName: string ;

    @ApiProperty()
    price: number;

    @ApiProperty()
    createdId: number;

    @ApiProperty()
    updatedId: number | null;

    @ApiProperty()
    createdDate: string;
    
    @ApiProperty()
    updatedDate: string;

    @ApiProperty()
    deletedDate: string;  

}