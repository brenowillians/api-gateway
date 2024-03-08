import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateProductDto  {

     
    @ApiProperty()
    @IsOptional()
    name: string ;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    active: boolean ;
    
    @ApiProperty()
    @IsOptional()
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;

    @ApiProperty()
    @IsOptional()
    image: string ;

    @ApiProperty()
    @IsOptional()
    fullPrice: number;

    @ApiProperty()
    @IsOptional()
    salePrice: number | null;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    onSale: boolean ;

    @ApiProperty()
    @IsOptional()
    description: string ;

    @ApiProperty()
    @IsOptional()
    idBrand: number;

    @ApiProperty()
    @IsOptional()
    idCategory: number;
   

  }  