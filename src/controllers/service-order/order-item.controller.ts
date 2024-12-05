import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ListCriteriaOrderDto } from 'src/dto/service-order/list-criteria-order.dto';
import { ListResultOrderDto } from 'src/dto/service-order/list-result-order-dto';
import { UpdateOrderDto } from 'src/dto/service-order/update-order.dto';
import { ResultOrderDto } from 'src/dto/service-order/result-order.dto';
import { CreateOrderDto } from 'src/dto/service-order/create-order.dto';
import { ListCriteriaOrderItemDto } from 'src/dto/service-order/list-criteria-order-item.dto';
import { UpdateOrderItemDto } from 'src/dto/service-order/update-order-item.dto';
import { ListResultOrderItemDto } from 'src/dto/service-order/list-result-order-item-dto';
import { ResultOrderItemDto } from 'src/dto/service-order/result-order-item.dto';
import { CreateOrderItemDto } from 'src/dto/service-order/create-order-item.dto';


@ApiTags('OrderItem')
@Controller('service-order/order-item')
export class OrderItemController {
    constructor(private readonly httpService: HttpService) {}
 

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultOrderItemDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createOrderItemDto: CreateOrderItemDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_ORDER_URL + '/order-item',createOrderItemDto

    );
    return result.data
    
    //return await this.orderItem.create(createOrderItemDto);
  }


  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: [ResultOrderItemDto], // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
   async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/order-item');
    return result.data
    //return await this.orderItem.findAll();
  }

  
  @Get('active')
  async findAllActive() {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/order-item/active');
    return await result.data
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultOrderItemDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_ORDER_URL + '/order-item/' + id);
    return await result.data
    //return this.orderItem.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_ORDER_URL + '/order-item/' + id,
      updateOrderItemDto
    );
    return result.data
    //return await this.orderItem.update(+id, updateOrderItemDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_ORDER_URL + '/order-item/' + id);
    return result.data
    //return await this.orderItem.remove(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultOrderItemDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriaOrderItemDto: ListCriteriaOrderItemDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_ORDER_URL + '/order-item/list/',listCriteriaOrderItemDto

    );
    return result.data
    //return await this.orderItem.list(listCriteriaOrderItemDto);
  }

}
