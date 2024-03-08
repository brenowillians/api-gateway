import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreateStaffDto {

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO LOGIN OBRIGATÓRIO"})
    login: string;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO PASSWORD OBRIGATÓRIO"})
    password: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    active: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    locked: boolean;


    @ApiProperty()
    @IsNotEmpty({message:"CAMPO SECTOR OBRIGATÓRIO"})
    sector: string;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO ROLE OBRIGATÓRIO"})
    role: string;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO ID_NUMBER OBRIGATÓRIO"})
    id_number: string;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO CPF OBRIGATÓRIO"})
    cpf: string;

    @ApiProperty()
    @IsOptional()
    ctps: string;

    @ApiProperty()
    @IsOptional()
    phone: string;

    @ApiProperty()
    @IsOptional()
    mobile: string;

}