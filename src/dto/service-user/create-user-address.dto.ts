import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
 
  export class CreateUserAddressDto {
 
    @ApiProperty()
    @IsNotEmpty({message:"CAMPO IDUSER OBRIGATÓRIO"})
    idUserSite: number;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO STREET OBRIGATÓRIO"})
    street: string ;
      
    @ApiProperty()
    @IsNotEmpty({message:"CAMPO NUMBER OBRIGATÓRIO"})
    number: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO ZIPCODE OBRIGATÓRIO"})
    zipCode: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO CITY OBRIGATÓRIO"})
    city: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO STATE OBRIGATÓRIO"})
    state: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO COUNTRY OBRIGATÓRIO"})
    country: string ;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO IDADDRESSTYPE OBRIGATÓRIO"})
    idAddressType: number;

    @ApiProperty()
    @IsOptional()
    primary: number


  }



