
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

import { ResultOrderDto } from './result-order.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ResultStatusDto } from './result-status.dto';



export class ListResultStatusDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultStatusDto]",
        "total" : "number"
    }})
    data: {result: [ResultStatusDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
