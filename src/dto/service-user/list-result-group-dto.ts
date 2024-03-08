
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultGroupDto } from './result-group.dto';




export class ListResultGroupDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultGroupDto]",
        "total" : "number"
    }})
    data: {result: [ResultGroupDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
