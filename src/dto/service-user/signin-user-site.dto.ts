import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class SigninUserSiteDto {

  @ApiProperty()
  @IsNotEmpty({message:"CAMPO LOGIN OBRIGATÓRIO"})
  login: string;

  @ApiProperty()
  @IsNotEmpty({message:"CAMPO PASSWORD OBRIGATÓRIO"})
  password: string; 
}