import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/dto/service-product/create-category.dto';
import { ListCriteriaCategoryDto } from 'src/dto/service-product/list-criteria-category.dto';
import { UpdateCategoryDto } from 'src/dto/service-product/update-category.dto';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultCategoryDto } from 'src/dto/service-product/result-category.dto';
import { ListResultCategoryDto } from 'src/dto/service-product/list-result-category-dto';

@ApiTags('Category')
@Controller('service-product/category')
export class CategoryController {
    
    constructor(private readonly httpService: HttpService) {}

  @ApiBearerAuth() 
  @ApiCreatedResponse({
    type: ResultCategoryDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard) 
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/category',createCategoryDto

    );
    return result.data
    // return await this.category.create(createCategoryDto);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultCategoryDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/category');
    return result.data
    //return await this.category.findAll();
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultCategoryDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/category/' + id);
    return await result.data
    // return await  this.category.findOne(+id);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_PRODUCT_URL + '/category/' + id,
    updateCategoryDto
    );
    return result.data
    //return await this.category.update(+id, updateCategoryDto);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_PRODUCT_URL + '/category/' + id);
    return result.data
   // return await this.category.remove(+id);
  }
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultCategoryDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriacategoryDto: ListCriteriaCategoryDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/category/list',listCriteriacategoryDto

    );
    return result.data
   // return await this.category.list(listCriteriacategoryDto);
  }


}
