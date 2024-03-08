import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateRuleDto {

  @ApiProperty()
    @IsNotEmpty({message:"CAMPO DESCRIPTION OBRIGATÓRIO"})
    description: string ;


  }  