import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import {Exclude} from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateBrandDto  {

    @ApiProperty()
    @IsOptional()
    name: string ;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    active: boolean ;
    
    @ApiProperty()
    @IsOptional()
    createdId: number;

    @ApiProperty()
    @IsOptional()
    updatedId: number | null;
    
    
  }