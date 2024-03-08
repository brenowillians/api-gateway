import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


 
  export class UpdateUserAddressDto {
  
    @ApiProperty()
    @IsOptional()
    idUser: number;

    @ApiProperty()
    @IsOptional()
    street: string ;
      
    @ApiProperty()
    @IsOptional()
    number: string ;

    @ApiProperty()
    @IsOptional()
    zipCode: string ;

    @ApiProperty()
    @IsOptional()
    city: string ;

    @ApiProperty()
    @IsOptional()
    state: string ;

    @ApiProperty()
    @IsOptional()
    country: string ;

    @ApiProperty()
    @IsOptional()
    idAddressType: number;

    
  }

