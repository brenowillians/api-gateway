import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


 
  export class UpdateUserAddressDto {
  
    @IsOptional()
    idUser: number;

    @IsOptional()
    street: string ;
      
    @IsOptional()
    number: string ;

    @IsOptional()
    zipCode: string ;

    @IsOptional()
    city: string ;

    @IsOptional()
    state: string ;

    @IsOptional()
    country: string ;

    @IsOptional()
    idAddressType: number;


  }

