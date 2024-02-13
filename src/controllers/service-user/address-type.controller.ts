import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { CreateAddressTypeDto } from 'src/dto/service-user/create-address-type.dto';
import { UpdateAddressTypeDto } from 'src/dto/service-user/update-address-type.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';



@ApiTags('AddressType') // Titulo Da Cadeia de Metodos
@Controller('service-user/address-type')
export class AddressTypeController {
    constructor(private readonly httpService: HttpService,) {}

  /*@ApiCreatedResponse({
    type: AddressType, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createAddressTypeDto: CreateAddressTypeDto) {

    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/address-type',createAddressTypeDto

    );
    return result.data
    //return await  this.addressType.create(createAddressTypeDto);
  }


  /*@ApiCreatedResponse({
    type: AddressType, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/address-type');
    return result.data
    
    //return await  this.addressType.findAll();
  }

  /*@ApiCreatedResponse({
    type: AddressType, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/address-type/' + id);
    return result.data
    //return await  this.addressType.findOne(+id);
  }

  /*@ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAddressTypeDto: UpdateAddressTypeDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/address-type/' + id,
      updateAddressTypeDto
    );
    return result.data
    //return await  this.addressType.update(+id, updateAddressTypeDto);
  }

  /*@ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/address-type/' + id);
    return result.data
    //return await  this.addressType.remove(+id);
  }

}
