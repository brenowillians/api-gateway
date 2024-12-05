/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { CreateOrderItemDto } from './create-order-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class MakeOrderDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'CAMPO idUserSite OBRIGATÓRIO' })
  idUserSite: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'CAMPO details OBRIGATÓRIO' })
  details: string;

  @ApiProperty()
  orderItems: CreateOrderItemDto[];

  @ApiProperty()
  @IsNotEmpty({ message: 'CAMPO creditCardNumber OBRIGATÓRIO' })
  creditCardNumber: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'CAMPO expirationDate OBRIGATÓRIO' })
  expirationDate: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'CAMPO cvc OBRIGATÓRIO' })
  cvc: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'CAMPO creditCardOwner OBRIGATÓRIO' })
  creditCardOwner: string;
}
