import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateBrandDto } from 'src/dto/service-product/create-brand.dto';
import { ListCriteriaBrandDto } from 'src/dto/service-product/list-criteria-brand.dto';
import { UpdateBrandDto } from 'src/dto/service-product/update-brand.dto';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultBrandDto } from 'src/dto/service-product/result-brand.dto';
import { ListResultBrandDto } from 'src/dto/service-product/list-result-brand-dto';


@ApiTags('Brand')
@Controller('service-product/brand')
export class BrandController {
    constructor(private readonly httpService: HttpService) {}
 

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultBrandDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createBrandDto: CreateBrandDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/brand',createBrandDto

    );
    return result.data
    
    //return await this.brand.create(createBrandDto);
  }


  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: [ResultBrandDto], // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
   async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/brand');
    return result.data
    //return await this.brand.findAll();
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultBrandDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_PRODUCT_URL + '/brand/' + id);
    return await result.data
    //return this.brand.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
  
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_PRODUCT_URL + '/brand/' + id,
      updateBrandDto
    );
    return result.data
    //return await this.brand.update(+id, updateBrandDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_PRODUCT_URL + '/brand/' + id);
    return result.data
    //return await this.brand.remove(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultBrandDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() listCriteriaBrandDto: ListCriteriaBrandDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_PRODUCT_URL + '/brand/list/',listCriteriaBrandDto

    );
    return result.data
    //return await this.brand.list(listCriteriaBrandDto);
  }

}
