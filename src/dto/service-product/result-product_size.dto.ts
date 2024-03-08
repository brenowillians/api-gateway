
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultProductSizeDto {

    @ApiProperty()
    idProductSize: number;

    @ApiProperty()
    idProduct: number;
     
    @ApiProperty()
    idSize: number;

    @ApiProperty()
    available: boolean ;
    
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
