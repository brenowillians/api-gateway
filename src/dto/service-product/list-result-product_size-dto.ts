
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultProductSizeDto } from './result-product_size.dto';



export class ListResultProductSizeDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultProductSizeDto]",
        "total" : "number"
    }})
    data: {result: [ResultProductSizeDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
