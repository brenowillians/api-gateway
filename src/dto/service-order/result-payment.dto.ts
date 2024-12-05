
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultPaymentDto {

    @ApiProperty()
    idPayment: number;    

    @ApiProperty()
    idOrder: number;
     
    @ApiProperty()
    value: number;

    @ApiProperty()
    processed: boolean ;
    
    @ApiProperty()
    concluded: boolean ;

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