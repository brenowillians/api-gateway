
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

import { ResultOrderDto } from './result-order.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ResultPaymentDto } from './result-payment.dto';



export class ListResultPaymentDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultPaymentDto]",
        "total" : "number"
    }})
    data: {result: [ResultPaymentDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
