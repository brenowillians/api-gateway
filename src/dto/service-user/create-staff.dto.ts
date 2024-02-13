import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class CreateStaffDto {

    @IsNotEmpty({message:"CAMPO NAME OBRIGATÓRIO"})
    name: string;

    @IsNotEmpty({message:"CAMPO LOGIN OBRIGATÓRIO"})
    login: string;

    @IsNotEmpty({message:"CAMPO PASSWORD OBRIGATÓRIO"})
    password: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsBoolean()
    locked: boolean;


    @IsNotEmpty({message:"CAMPO SECTOR OBRIGATÓRIO"})
    sector: string;

    @IsNotEmpty({message:"CAMPO ROLE OBRIGATÓRIO"})
    role: string;

    @IsNotEmpty({message:"CAMPO ID_NUMBER OBRIGATÓRIO"})
    id_number: string;

    @IsNotEmpty({message:"CAMPO CPF OBRIGATÓRIO"})
    cpf: string;

    @IsOptional()
    ctps: string;

    @IsOptional()
    phone: string;

    @IsOptional()
    mobile: string;

}