import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class UpdateAddressTypeDto {
     
  @ApiProperty()
    @IsOptional()
    description: string ;
  

  }  
