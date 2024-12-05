import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UpdatePaymentDto{
    

    @ApiProperty()
    @IsOptional()
    idOrder: number;
     
    @ApiProperty()
    @IsOptional()
    value: number;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    processed: boolean ;
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    concluded: boolean ;

    @ApiProperty()
    @IsOptional()
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;
    

}  
