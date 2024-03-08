import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressTypeDto {

  @ApiProperty()
    @IsNotEmpty({message:"CAMPO DESCRIPTION OBRIGATÓRIO"})
    description: string ;

  }  
