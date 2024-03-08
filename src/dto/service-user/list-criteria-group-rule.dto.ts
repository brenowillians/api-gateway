import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional } from "class-validator";

export class ListCriteriaGroupRuleDto {
    
    @ApiProperty()
    @IsNotEmpty()
    idGroup: number;

    @ApiProperty()
    @IsNotEmpty()
    idRule: number;
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isAllowed: boolean;

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