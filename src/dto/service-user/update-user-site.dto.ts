import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class UpdateUserSiteDto {

     
    @IsOptional()
    login: string ;

    @IsOptional()
    password: string ;
  
    @IsOptional()
    @IsBoolean()
    locked: boolean | null;

    @IsOptional()
    name: string ;

    @IsOptional()
    birthday: string | null;
  
    @IsOptional()
    gender: string | null;

    @IsOptional()
    phone: string | null;

    @IsOptional()
    mobile: string | null;

    @IsOptional()
    id_number: string | null;

    @IsOptional()
    cpf: string | null;
  
}