
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

import { ResultOrderDto } from './result-order.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ResultOrderItemDto } from './result-order-item.dto';



export class ListResultOrderItemDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultOrderItemDto]",
        "total" : "number"
    }})
    data: {result: [ResultOrderItemDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
