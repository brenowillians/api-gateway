import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/dto/service-product/create-product.dto';
import { ListCriteriaProductDto } from 'src/dto/service-product/list-criteria-product.dto';
import { UpdateProductDto } from 'src/dto/service-product/update-product.dto';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultProductDto } from 'src/dto/service-product/result-product.dto';
import { ListResultProductDto } from 'src/dto/service-product/list-result-product-dto';
import { ListCriteriaProductByCategoryDto } from 'src/dto/service-product/list-criteria-product-by-category.dto';

@ApiTags('Product')
@Controller('service-product/product')
export class ProductController {
    
    
    constructor(private readonly httpService: HttpService) {}

  
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultProductDto, // aqui definimos o tipo de resposta
  })
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
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultProductDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)  
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/product');
    return result.data
    // return await this.product.findAll();


    
  }
  //@ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultProductDto, // aqui definimos o tipo de resposta
  })
  //@UseGuards(AccessTokenGuard)  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/product/' + id);
    return await result.data
    //return await  this.product.findOne(+id);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  })
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
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)  
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_PRODUCT_URL + '/product/' + id);
    return result.data
    // return await this.product.remove(+id);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultProductDto, // aqui definimos o tipo de resposta
  })
  
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriaproductDto: ListCriteriaProductDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/product/list',listCriteriaproductDto

    );
    return result.data
   // return await this.product.list(listCriteriaproductDto);
  }

  @Post('list-by-category')
  async listByCategory(@Body() listCriteriaProductByCategoryDto: ListCriteriaProductByCategoryDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/product/list-by-category',listCriteriaProductByCategoryDto

    );
    return result.data
   // return await this.product.list(listCriteriaproductDto);
  }
}
