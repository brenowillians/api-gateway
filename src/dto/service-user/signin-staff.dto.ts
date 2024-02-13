import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class SigninStaffDto{
    
    @IsNotEmpty({message:"CAMPO LOGIN OBRIGATÓRIO"})
    login: string;

    @IsNotEmpty({message:"CAMPO PASSWORD OBRIGATÓRIO"})
    password: string;
}