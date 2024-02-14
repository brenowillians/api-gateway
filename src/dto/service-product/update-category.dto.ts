import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';


export class UpdateCategoryDto  {

     
    @IsOptional()
    name: string ;

    @IsOptional()
    @IsBoolean()
    active: boolean ;
    
    @IsOptional()
    createdId: number;

    @IsOptional()
    updatedId: number | null;
    
  }