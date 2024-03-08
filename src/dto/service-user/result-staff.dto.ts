
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultStaffDto {

        
    
    @ApiProperty()
    idStaff: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    login: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    active: boolean;

    @ApiProperty()
    locked: boolean;


    @ApiProperty()
    sector: string;

    @ApiProperty()
    role: string;

    @ApiProperty()
    id_number: string;

    @ApiProperty()
    cpf: string;

    @ApiProperty()
    ctps: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    mobile: string;
    
    @ApiProperty()
    createdDate: string;
    @ApiProperty()
    updatedDate: string;
    @ApiProperty()
    deletedDate: string;       
  }  
