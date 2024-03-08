
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultRuleDto } from './result-rule.dto';




export class ListResultRuleDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultRuleDto]",
        "total" : "number"
    }})
    data: {result: [ResultRuleDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
