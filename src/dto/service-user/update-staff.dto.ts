import {IsBoolean,  IsNumber, IsOptional, MaxLength } from 'class-validator';



export class UpdateStaffDto {
    
    @IsOptional()
    name: string;

    @IsOptional()
    login: string;

    @IsOptional()
    password: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsOptional()
    @IsBoolean()
    locked: boolean;


    @IsOptional()
    sector: string;

    @IsOptional()
    role: string;

    @IsOptional()
    id_number: string;

    @IsOptional()
    cpf: string;

    @IsOptional()
    ctps: string;

    @IsOptional()
    phone: string;

    @IsOptional()
    mobile: string;

}