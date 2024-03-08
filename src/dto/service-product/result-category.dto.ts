
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultCategoryDto {

  @ApiProperty()
  idCategory: number;
     
  @ApiProperty()
  name: string ;

  @ApiProperty()
  active: boolean ;
  
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
