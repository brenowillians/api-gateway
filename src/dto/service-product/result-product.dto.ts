
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultProductDto {

    @ApiProperty()
    idProduct: number;
     
    @ApiProperty()
    name: string ;

    @ApiProperty()
    active: boolean ;
    
    @ApiProperty()
    createdId: number;

    @ApiProperty()
    updatedId: number | null;

    @ApiProperty()
    image: string ;

    @ApiProperty()
    fullPrice: number;

    @ApiProperty()
    salePrice: number | null;

    @ApiProperty()
    onSale: boolean ;

    @ApiProperty()
    description: string ;

    @ApiProperty()
    idBrand: number;

    @ApiProperty()
    idCategory: number;
    
    @ApiProperty()
    createdDate: string;
     
    @ApiProperty()
    updatedDate: string;
    
    @ApiProperty()
    deletedDate: string;  
      
  }  
