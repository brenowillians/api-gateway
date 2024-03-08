import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class UpdateGroupRuleDto {

  @ApiProperty()
    @IsOptional()
    idGroup: number;

    @ApiProperty()
    @IsOptional()
    idRule: number;
      
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isAllowed: boolean;

  }
