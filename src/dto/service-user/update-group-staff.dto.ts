import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';

export class UpdateGroupStaffDto {

    @IsOptional()
    idStaff: number;

    @IsOptional()
    idGroup: number;


  }