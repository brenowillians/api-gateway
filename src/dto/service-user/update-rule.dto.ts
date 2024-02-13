import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class UpdateRuleDto {

 
    @IsOptional()
    description: string ;

  }  