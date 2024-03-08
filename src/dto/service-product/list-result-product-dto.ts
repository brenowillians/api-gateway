
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultProductDto } from './result-product.dto';



export class ListResultProductDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultProductDto]",
        "total" : "number"
    }})
    data: {result: [ResultProductDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
