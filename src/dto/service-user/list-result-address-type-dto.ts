
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultAddressTypeDto } from './result-address-type.dto';




export class ListResultAddressTypeDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultAddressTypeDto]",
        "total" : "number"
    }})
    data: {result: [ResultAddressTypeDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
