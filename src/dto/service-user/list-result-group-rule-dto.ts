
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultGroupRuleDto } from './result-group-rule.dto';




export class ListResultGroupRuleDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultGroupRuleDto]",
        "total" : "number"
    }})
    data: {result: [ResultGroupRuleDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
