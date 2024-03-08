import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateGroupRuleDto {


  @ApiProperty()
    @IsNotEmpty({message:"CAMPO IDGROUP OBRIGATÓRIO"})
    idGroup: number;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO IDRULE OBRIGATÓRIO"})
    idRule: number;
      
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isAllowed: boolean;

  }
