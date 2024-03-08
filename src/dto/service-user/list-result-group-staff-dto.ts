
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ResultGroupStaffDto } from './result-group-staff.dto';




export class ListResultGroupStaffDto {
    
    @ApiProperty()
    status: number

    @ApiProperty({example :{
        "result" :"[ResultGroupStaffDto]",
        "total" : "number"
    }})
    data: {result: [ResultGroupStaffDto], total: number}
    
    @ApiProperty()
    message:string
    
    @ApiProperty()
    error: string  
   
  }  
