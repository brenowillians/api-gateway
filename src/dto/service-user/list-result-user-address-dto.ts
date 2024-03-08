
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultUserAddressDto } from './result-user-address.dto';




export class ListResultUserAddressDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultUserAddressDto]",
        "total" : "number"
    }})
    data: {result: [ResultUserAddressDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
