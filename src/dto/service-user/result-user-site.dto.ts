
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultUserSiteDto {

        
    
    @ApiProperty()
    idUserSite: number;
     
    @ApiProperty()
    login: string ;

    @ApiProperty()
    password: string ;
  
    @ApiProperty()
    locked: boolean | null;

    @ApiProperty()
    name: string ;

    @ApiProperty()
    birthday: string | null;
  
    @ApiProperty()
    gender: string | null;

    @ApiProperty()
    phone: string | null;

    @ApiProperty()
    mobile: string | null;

    @ApiProperty()
    id_number: string | null;

    @ApiProperty()
    cpf: string | null;

    
    @ApiProperty()
    createdDate: string;
     
    @ApiProperty()
    updatedDate: string;
     
    @ApiProperty()
    deletedDate: string;  

  }  
