
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

import { ResultOrderDto } from './result-order.dto';
import { ApiProperty } from '@nestjs/swagger';



export class ListResultOrderDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultOrderDto]",
        "total" : "number"
    }})
    data: {result: [ResultOrderDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
