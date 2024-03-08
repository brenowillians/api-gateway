
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultRuleDto {

        
    
    @ApiProperty()
    idRule: number;
     
    @ApiProperty()
    description: string ;
    
    
    @ApiProperty()
    createdDate: string;
     
    @ApiProperty()
    updatedDate: string;
     
    @ApiProperty()
    deletedDate: string;  

       
  }  
