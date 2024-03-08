
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultStaffDto } from './result-staff.dto';




export class ListResultStaffDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultStaffDto]",
        "total" : "number"
    }})
    data: {result: [ResultStaffDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
