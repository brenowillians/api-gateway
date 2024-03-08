
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultGroupRuleDto {

        
    
    @ApiProperty()
    idGroupRule: number;

    @ApiProperty()
    idGroup: number;

    @ApiProperty()
    idRule: number;
      
    @ApiProperty()
    isAllowed: boolean;

    @ApiProperty()
    createdDate: string;
     
    @ApiProperty()
    updatedDate: string;
     
    @ApiProperty()
    deletedDate: string;  

    
  }  
