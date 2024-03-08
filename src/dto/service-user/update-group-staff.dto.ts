import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class UpdateGroupStaffDto {

  @ApiProperty()
    @IsOptional()
    idStaff: number;

    @ApiProperty()
    @IsOptional()
    idGroup: number;


  }