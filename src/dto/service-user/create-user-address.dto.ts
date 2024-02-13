import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
 
  export class CreateUserAddressDto {
 

    @IsNotEmpty({message:"CAMPO IDUSER OBRIGATÓRIO"})
    idUser: number;

    @IsNotEmpty({message:"CAMPO STREET OBRIGATÓRIO"})
    street: string ;
      
    @IsNotEmpty({message:"CAMPO NUMBER OBRIGATÓRIO"})
    number: string ;

    @IsNotEmpty({message:"CAMPO ZIPCODE OBRIGATÓRIO"})
    zipCode: string ;

    @IsNotEmpty({message:"CAMPO CITY OBRIGATÓRIO"})
    city: string ;

    @IsNotEmpty({message:"CAMPO STATE OBRIGATÓRIO"})
    state: string ;

    @IsNotEmpty({message:"CAMPO COUNTRY OBRIGATÓRIO"})
    country: string ;

    @IsNotEmpty({message:"CAMPO IDADDRESSTYPE OBRIGATÓRIO"})
    idAddressType: number;

  }



