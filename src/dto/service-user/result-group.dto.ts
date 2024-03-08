
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultGroupDto {

        
    
    @ApiProperty()
    idGroup: number;

    @ApiProperty()
    name: string ;
      
    @ApiProperty()
    isAdmin: boolean | null;

    @ApiProperty()
    createdDate: string;
     
    @ApiProperty()
    updatedDate: string;
     
    @ApiProperty()
    deletedDate: string;  
    

       
  }  
