import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class CreateGroupDto{

  @ApiProperty()
    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string ;
      
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isAdmin: boolean | null;

  }