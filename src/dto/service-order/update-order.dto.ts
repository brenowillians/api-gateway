import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateOrderDto{
  
     
  @ApiProperty()
  @IsOptional()
  orderDate: string ;

  @ApiProperty()
  @IsOptional()
  idUserSite: number;

  @ApiProperty()
  @IsOptional()
  details: string ;

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