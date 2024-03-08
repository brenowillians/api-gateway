import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CreateGroupStaffDto {

  @ApiProperty()
    @IsNotEmpty({message:"CAMPO IDSTAFF OBRIGATÓRIO"})
    idStaff: number;

    @ApiProperty()
    @IsNotEmpty({message:"CAMPO IDGROUP OBRIGATÓRIO"})
    idGroup: number;

  }