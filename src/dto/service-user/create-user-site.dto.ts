import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreateUserSiteDto {

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO LOGIN OBRIGATÓRIO"})
    login: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO PASSWORD OBRIGATÓRIO"})
    password: string ;
  
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    locked: boolean | null;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string ;

    @ApiProperty()
    @IsOptional()
    birthday: string | null;
  
    @ApiProperty()
    @IsOptional()
    gender: string | null;

    @ApiProperty()
    @IsOptional()
    phone: string | null;

    @ApiProperty()
    @IsOptional()
    mobile: string | null;

    @ApiProperty()
    @IsOptional()
    id_number: string | null;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO CPF OBRIGATÓRIO"})
    cpf: string | null;
  
}