
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultOrderStatusDto {

    @ApiProperty()
    idOrderStatus: number;

    @ApiProperty()
    idOrder: number;
    
    @ApiProperty()
    idStatus: number;
    
    @ApiProperty()
    description: string;
        
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