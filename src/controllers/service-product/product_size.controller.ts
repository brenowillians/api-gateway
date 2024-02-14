import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductSizeDto } from 'src/dto/service-product/create-product_size.dto';
import { ListCriteriaProduct_sizeDto } from 'src/dto/service-product/list-criteria-product_size.dto';
import { UpdateProductSizeDto } from 'src/dto/service-product/update-product_size.dto';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';

@ApiTags('ProductSize')
@Controller('service-product/product-size')
export class ProductSizeController {
    
    
    constructor(private readonly httpService: HttpService) {}

 
  
 /* @ApiCreatedResponse({
    type: ProductSize, // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Post()
  async create(@Body() createProductSizeDto: CreateProductSizeDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/product-size',createProductSizeDto

    );
    return result.data
    //return await this.productSize.create(createProductSizeDto);
  }
/*
  @ApiCreatedResponse({
    type: ProductSize, // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/product-size');
    return result.data
    //return await this.productSize.findAll();
  }
/*
  @ApiCreatedResponse({
    type: ProductSize, // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/product-size/' + id);
    // return await this.productSize.findOne(+id);
  }
/*
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductSizeDto: UpdateProductSizeDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_PRODUCT_URL + '/product-size/' + id,
    updateProductSizeDto
    );
    return result.data
    // return await this.productSize.update(+id, updateProductSizeDto);
  }
/*
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_PRODUCT_URL + '/product-size/' + id);
    return result.data
    // return await this.productSize.remove(+id);
  }
/*
  @ApiCreatedResponse({
    type: ProductSize, // aqui definimos o tipo de resposta
  })*/ 
  @Post('list')
  async list(@Body() listCriteriaproductSizeDto: ListCriteriaProduct_sizeDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/product-size/',listCriteriaproductSizeDto

    );
    return result.data
    //return await this.productSize.list(listCriteriaproductSizeDto);
  }

}
