import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean,  IsNumber, IsOptional, MaxLength } from 'class-validator';



export class UpdateStaffDto {
    
    @ApiProperty()
    @IsOptional()
    name: string;

    @ApiProperty()
    @IsOptional()
    login: string;

    @ApiProperty()
    @IsOptional()
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
    @IsOptional()
    sector: string;

    @ApiProperty()
    @IsOptional()
    role: string;

    @ApiProperty()
    @IsOptional()
    id_number: string;

    @ApiProperty()
    @IsOptional()
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