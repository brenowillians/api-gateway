import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateStatusDto {
  
     
  @ApiProperty() 
    @IsOptional()
    description: string ;
    
    @ApiProperty()
    @IsOptional()
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;
    
  }  