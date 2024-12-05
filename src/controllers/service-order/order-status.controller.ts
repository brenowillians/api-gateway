import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ListCriteriaOrderDto } from 'src/dto/service-order/list-criteria-order.dto';
import { ListResultOrderDto } from 'src/dto/service-order/list-result-order-dto';
import { UpdateOrderDto } from 'src/dto/service-order/update-order.dto';
import { ResultOrderDto } from 'src/dto/service-order/result-order.dto';
import { CreateOrderDto } from 'src/dto/service-order/create-order.dto';
import { ListCriteriaOrderStatusDto } from 'src/dto/service-order/list-criteria-order-status.dto';
import { UpdateOrderStatusDto } from 'src/dto/service-order/update-order-status.dto';
import { ListResultOrderStatusDto } from 'src/dto/service-order/list-result-order-status-dto';
import { ResultOrderStatusDto } from 'src/dto/service-order/result-order-status.dto';
import { CreateOrderStatusDto } from 'src/dto/service-order/create-order-status.dto';


@ApiTags('OrderStatus')
@Controller('service-order/order-status')
export class OrderStatusController {
    constructor(private readonly httpService: HttpService) {}
 

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultOrderStatusDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createOrderStatusDto: CreateOrderStatusDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_ORDER_URL + '/order-status',createOrderStatusDto

    );
    return result.data
    
    //return await this.orderStatus.create(createOrderStatusDto);
  }


  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: [ResultOrderStatusDto], // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
   async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/order-status');
    return result.data
    //return await this.orderStatus.findAll();
  }

  
  @Get('active')
  async findAllActive() {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/order-status/active');
    return await result.data
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultOrderStatusDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/order-status/' + id);
    return await result.data
    //return this.orderStatus.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOrderStatusDto: UpdateOrderStatusDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_ORDER_URL + '/order-status/' + id,
      updateOrderStatusDto
    );
    return result.data
    //return await this.orderStatus.update(+id, updateOrderStatusDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_ORDER_URL + '/order-status/' + id);
    return result.data
    //return await this.orderStatus.remove(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultOrderStatusDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriaOrderStatusDto: ListCriteriaOrderStatusDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_ORDER_URL + '/order-status/list/',listCriteriaOrderStatusDto

    );
    return result.data
    //return await this.orderStatus.list(listCriteriaOrderStatusDto);
  }

}
