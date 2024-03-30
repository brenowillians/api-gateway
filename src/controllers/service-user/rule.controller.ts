import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateRuleDto } from 'src/dto/service-user/create-rule.dto';
import { UpdateRuleDto } from 'src/dto/service-user/update-rule.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultRuleDto } from 'src/dto/service-user/result-rule.dto';
import { ListResultRuleDto } from 'src/dto/service-user/list-result-rule-dto';
import { ListCriteriaRuleDto } from 'src/dto/service-user/list-criteria-rule.dto';


@ApiTags('Rule') // Titulo Da Cadeia de Metodos
@Controller('service-user/rule')
export class RuleController { 
       
    
    constructor(private readonly httpService: HttpService) {}

    @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultRuleDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createRuleDto: CreateRuleDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/rule',createRuleDto

    );
    return result.data
    
    //return await this.rule.create(createRuleDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultRuleDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/rule');
    return result.data
    
    //return await this.rule.findAll();
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultRuleDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/rule/' + id);
    return result.data
    
    //return await this.rule.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRuleDto: UpdateRuleDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/rule/' + id,
    updateRuleDto
    );
    return result.data
    
    //return await this.rule.update(+id, updateRuleDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/rule/' + id);
    return result.data
    //return await this.rule.remove(+id);
  }

  
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultRuleDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() ListCriteriaRuleDto: ListCriteriaRuleDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/rule/list',ListCriteriaRuleDto

    );
    return result.data
    //return await this.rule.list(ListCriteriaRuleDto);
  }



}
