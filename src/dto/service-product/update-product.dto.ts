import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';


export class UpdateProductDto  {

     
    @IsOptional()
    name: string ;

    @IsOptional()
    @IsBoolean()
    active: boolean ;
    
    @IsOptional()
    createdId: number;

    @IsOptional()
    updatedId: number | null;

    @IsOptional()
    image: string ;

    @IsOptional()
    fullPrice: number;

    @IsOptional()
    salePrice: number | null;

    @IsOptional()
    @IsBoolean()
    onSale: boolean ;

    @IsOptional()
    description: string ;

    @IsOptional()
    idBrand: number;

    @IsOptional()
    idCategory: number;
   

  }  