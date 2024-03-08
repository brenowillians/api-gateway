
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultCategoryDto } from './result-category.dto';



export class ListResultCategoryDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultCategoryDto]",
        "total" : "number"
    }})
    data: {result: [ResultCategoryDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
