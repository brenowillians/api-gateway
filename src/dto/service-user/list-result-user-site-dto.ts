
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultUserSiteDto } from './result-user-site.dto';




export class ListResultUserSiteDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultUserSiteDto]",
        "total" : "number"
    }})
    data: {result: [ResultUserSiteDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
