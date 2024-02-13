import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class UpdateAddressTypeDto {
     
    @IsOptional()
    description: string ;
  

  }  
