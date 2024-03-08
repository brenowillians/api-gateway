
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ResultBrandDto } from './result-brand.dto';
import { ApiProperty } from '@nestjs/swagger';



export class ListResultBrandDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultBrandDto]",
        "total" : "number"
    }})
    data: {result: [ResultBrandDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
