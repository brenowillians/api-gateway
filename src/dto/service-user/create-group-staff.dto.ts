import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class CreateGroupStaffDto {

    @IsNotEmpty({message:"CAMPO IDSTAFF OBRIGATÓRIO"})
    idStaff: number;

    @IsNotEmpty({message:"CAMPO IDGROUP OBRIGATÓRIO"})
    idGroup: number;

  }