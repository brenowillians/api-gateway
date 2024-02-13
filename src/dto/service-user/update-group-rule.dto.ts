import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class UpdateGroupRuleDto {

    @IsOptional()
    idGroup: number;

    @IsOptional()
    idRule: number;
      
    @IsOptional()
    @IsBoolean()
    isAllowed: boolean;

  }
