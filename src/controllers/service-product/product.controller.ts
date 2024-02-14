import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/dto/service-product/create-product.dto';
import { ListCriteriaProductDto } from 'src/dto/service-product/list-criteria-product.dto';
import { UpdateProductDto } from 'src/dto/service-product/update-product.dto';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';

@ApiTags('Product')
@Controller('service-product/product')
export class ProductController {
    
    
    constructor(private readonly httpService: HttpService) {}

  
  /*
  @ApiCreatedResponse({
    type: Product, // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/product',createProductDto

    );
    return result.data
    //return await this.product.create(createProductDto);
  }
/*
  @ApiCreatedResponse({
    type: Product, // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/product');
    return result.data
    // return await this.product.findAll();
  }
  /*
  @ApiCreatedResponse({
    type: Product, // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/product/' + id);
    
    //return await  this.product.findOne(+id);
  }
/*
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_PRODUCT_URL + '/product/' + id,
    updateProductDto
    );
    return result.data
    //return await this.product.update(+id, updateProductDto);
  }
/*
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard)  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_PRODUCT_URL + '/product/' + id);
    return result.data
    // return await this.product.remove(+id);
  }
/*
  @ApiCreatedResponse({
    type: Product, // aqui definimos o tipo de resposta
  })*/ 
  @Post('list')
  async list(@Body() listCriteriaproductDto: ListCriteriaProductDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/product/',listCriteriaproductDto

    );
    return result.data
   // return await this.product.list(listCriteriaproductDto);
  }

}
