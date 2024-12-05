
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

import { ResultOrderDto } from './result-order.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ResultOrderStatusDto } from './result-order-status.dto';



export class ListResultOrderStatusDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultOrderStatusDto]",
        "total" : "number"
    }})
    data: {result: [ResultOrderStatusDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
