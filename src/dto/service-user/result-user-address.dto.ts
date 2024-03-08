
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultUserAddressDto {

        
    
    @ApiProperty()
    idAddress: number;

    @ApiProperty()
    idUser: number;

    @ApiProperty()
    street: string ;
      
    @ApiProperty()
    number: string ;

    @ApiProperty()
    zipCode: string ;

    @ApiProperty()
    city: string ;

    @ApiProperty()
    state: string ;

    @ApiProperty()
    country: string ;

    @ApiProperty()
    idAddressType: number;

    
    @ApiProperty()
    createdDate: string;
     
    @ApiProperty()
    updatedDate: string;
     
    @ApiProperty()
    deletedDate: string;  

  }  
