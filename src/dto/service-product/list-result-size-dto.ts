
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultSizeDto } from './result-size.dto';



export class ListResultSizeDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultSizeDto]",
        "total" : "number"
    }})
    data: {result: [ResultSizeDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
