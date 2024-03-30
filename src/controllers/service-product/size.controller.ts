import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateSizeDto } from 'src/dto/service-product/create-size.dto';
import { ListCriteriaSizeDto } from 'src/dto/service-product/list-criteria-size.dto';
import { UpdateSizeDto } from 'src/dto/service-product/update-size.dto';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultSizeDto } from 'src/dto/service-product/result-size.dto';
import { ListResultSizeDto } from 'src/dto/service-product/list-result-size-dto';


@ApiTags('Size')
@Controller('service-product/size')
export class SizeController {  
       
    constructor(private readonly httpService: HttpService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultSizeDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)  
  @Post()
  async create(@Body() createSizeDto: CreateSizeDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/size',createSizeDto

    );
    return result.data
    //return await this.size.create(createSizeDto);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultSizeDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)  
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/size');
    return result.data
    // return await  this.size.findAll();
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultSizeDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/size/' + id);
    return await result.data
    //return await this.size.findOne(+id);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)  
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_PRODUCT_URL + '/size/' + id,
    updateSizeDto
    );
    return result.data
    //return await this.size.update(+id, updateSizeDto);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_PRODUCT_URL + '/size/' + id);
    return result.data
    // return await this.size.remove(+id);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultSizeDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriasizeDto: ListCriteriaSizeDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/size/list',listCriteriasizeDto

    );
    return result.data
    //return await this.size.list(listCriteriasizeDto);
  }




}
