
import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, MaxLength } from 'class-validator';



export class ResultOrderDto {

    @ApiProperty()
idOrder: number;

@ApiProperty()
orderDate: string ;

@ApiProperty()
idUserSite: number;

@ApiProperty()
details: string ;

@ApiProperty()
active: boolean ;

@ApiProperty()
createdId: number;

@ApiProperty()
updatedId: number | null;

@ApiProperty()
createdDate: string;
 
@ApiProperty()
updatedDate: string;

@ApiProperty()
deletedDate: string;  

}