import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ListCriteriaOrderDto } from 'src/dto/service-order/list-criteria-order.dto';
import { ListResultOrderDto } from 'src/dto/service-order/list-result-order-dto';
import { UpdateOrderDto } from 'src/dto/service-order/update-order.dto';
import { ResultOrderDto } from 'src/dto/service-order/result-order.dto';
import { CreateOrderDto } from 'src/dto/service-order/create-order.dto';
import { MakeOrderDto } from 'src/dto/service-order/make-order.dto';

@ApiTags('Order')
@Controller('service-order/order')
export class OrderController {
  constructor(private readonly httpService: HttpService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultOrderDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    const result = await this.httpService.axiosRef.post(
      process.env.SERVICE_ORDER_URL + '/order',
      createOrderDto,
    );
    return result.data;

    //return await this.order.create(createOrderDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: [ResultOrderDto], // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result = await this.httpService.axiosRef.get(
      process.env.SERVICE_ORDER_URL + '/order',
    );
    return result.data;
    //return await this.order.findAll();
  }

  @Get('active')
  async findAllActive() {
    const result = await this.httpService.axiosRef.get(
      process.env.SERVICE_ORDER_URL + '/order/active',
    );
    return await result.data;
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultOrderDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.httpService.axiosRef.get(
      process.env.SERVICE_ORDER_URL + '/order/' + id,
    );
    return await result.data;
    //return this.order.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'Registro atualizado', // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    const result = await this.httpService.axiosRef.patch(
      process.env.SERVICE_ORDER_URL + '/order/' + id,
      updateOrderDto,
    );
    return result.data;
    //return await this.order.update(+id, updateOrderDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'Registro excluido', // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.httpService.axiosRef.delete(
      process.env.SERVICE_ORDER_URL + '/order/' + id,
    );
    return result.data;
    //return await this.order.remove(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultOrderDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriaOrderDto: ListCriteriaOrderDto) {
    const result = await this.httpService.axiosRef.post(
      process.env.SERVICE_ORDER_URL + '/order/list/',
      listCriteriaOrderDto,
    );
    return result.data;
    //return await this.order.list(listCriteriaOrderDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultOrderDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('make-order')
  async makeOrder(@Body() makeOrderDto: MakeOrderDto) {
    const result = await this.httpService.axiosRef.post(
      process.env.SERVICE_ORDER_URL + '/order/make-order/',
      makeOrderDto,
    );
    return result.data;
    //return await this.order.list(listCriteriaOrderDto);
  }
}
