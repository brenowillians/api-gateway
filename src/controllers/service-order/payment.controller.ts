import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ListCriteriaOrderDto } from 'src/dto/service-order/list-criteria-order.dto';
import { ListResultOrderDto } from 'src/dto/service-order/list-result-order-dto';
import { UpdateOrderDto } from 'src/dto/service-order/update-order.dto';
import { ResultOrderDto } from 'src/dto/service-order/result-order.dto';
import { CreateOrderDto } from 'src/dto/service-order/create-order.dto';
import { ListCriteriaPaymentDto } from 'src/dto/service-order/list-criteria-payment.dto';
import { ListResultPaymentDto } from 'src/dto/service-order/list-result-payment-dto';
import { UpdatePaymentDto } from 'src/dto/service-order/update-payment.dto';
import { ResultPaymentDto } from 'src/dto/service-order/result-payment.dto';
import { CreatePaymentDto } from 'src/dto/service-order/create-payment.dto';


@ApiTags('Payment')
@Controller('service-order/payment')
export class PaymentController {
    constructor(private readonly httpService: HttpService) {}
 

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultPaymentDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createPaymentDto: CreatePaymentDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_ORDER_URL + '/payment',createPaymentDto

    );
    return result.data
    
    //return await this.payment.create(createPaymentDto);
  }


  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: [ResultPaymentDto], // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
   async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/payment');
    return result.data
    //return await this.payment.findAll();
  }

  
  @Get('active')
  async findAllActive() {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/payment/active');
    return await result.data
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultPaymentDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/payment/' + id);
    return await result.data
    //return this.payment.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_ORDER_URL + '/payment/' + id,
      updatePaymentDto
    );
    return result.data
    //return await this.payment.update(+id, updatePaymentDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_ORDER_URL + '/payment/' + id);
    return result.data
    //return await this.payment.remove(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultPaymentDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriaPaymentDto: ListCriteriaPaymentDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_ORDER_URL + '/payment/list/',listCriteriaPaymentDto

    );
    return result.data
    //return await this.payment.list(listCriteriaPaymentDto);
  }

}
