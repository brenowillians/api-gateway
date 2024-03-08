import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class UpdateUserSiteDto {

    @ApiProperty()
    @IsOptional()
    login: string ;

    @ApiProperty()
    @IsOptional()
    password: string ;
  
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    locked: boolean | null;

    @ApiProperty()
    @IsOptional()
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
    @IsOptional()
    cpf: string | null;
  
}