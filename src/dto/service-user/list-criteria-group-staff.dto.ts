import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaGroupStaffDto {
    
    @ApiProperty()
    @IsNotEmpty()
    idStaff: number;

    @ApiProperty()
    @IsNotEmpty()
    idGroup: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    items: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    page: number;

    @ApiProperty()
    @IsNotEmpty()
    //ordenar por propriedades indiscriminadas da entidade
    order: { [key: string]: string }

}