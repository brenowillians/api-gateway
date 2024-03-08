import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class UpdateGroupDto  {

  @ApiProperty()
    @IsOptional()
    name: string ;
      
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isAdmin: boolean | null;

  }