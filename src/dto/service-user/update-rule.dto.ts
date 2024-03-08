import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class UpdateRuleDto {

  @ApiProperty()
    @IsOptional()
    description: string ;

  }  