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
import { ResultStatusDto } from 'src/dto/service-order/result-status.dto';
import { CreateStatusDto } from 'src/dto/service-order/create-status.dto';
import { UpdateStatusDto } from 'src/dto/service-order/update-status.dto';
import { ListResultStatusDto } from 'src/dto/service-order/list-result-status-dto';
import { ListCriteriaStatusDto } from 'src/dto/service-order/list-criteria-status.dto';


@ApiTags('Status')
@Controller('service-order/status')
export class StatusController {
    constructor(private readonly httpService: HttpService) {}
 

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultStatusDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createStatusDto: CreateStatusDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_ORDER_URL + '/status',createStatusDto

    );
    return result.data
    
    //return await this.status.create(createStatusDto);
  }


  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: [ResultStatusDto], // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
   async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/status');
    return result.data
    //return await this.status.findAll();
  }

  
  @Get('active')
  async findAllActive() {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/status/active');
    return await result.data
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultStatusDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/status/' + id);
    return await result.data
    //return this.status.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_ORDER_URL + '/status/' + id,
      updateStatusDto
    );
    return result.data
    //return await this.status.update(+id, updateStatusDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_ORDER_URL + '/status/' + id);
    return result.data
    //return await this.status.remove(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultStatusDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriaStatusDto: ListCriteriaStatusDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_ORDER_URL + '/status/list/',listCriteriaStatusDto

    );
    return result.data
    //return await this.payment.list(listCriteriaStatusDto);
  }

}
