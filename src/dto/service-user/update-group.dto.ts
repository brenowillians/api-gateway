import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';


export class UpdateGroupDto  {


    @IsOptional()
    name: string ;
      
    @IsOptional()
    @IsBoolean()
    isAdmin: boolean | null;

  }