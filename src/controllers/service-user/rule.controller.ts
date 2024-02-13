import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateRuleDto } from 'src/dto/service-user/create-rule.dto';
import { UpdateRuleDto } from 'src/dto/service-user/update-rule.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';


@ApiTags('Rule') // Titulo Da Cadeia de Metodos
@Controller('service-user/rule')
export class RuleController { 
       
    
    constructor(private readonly httpService: HttpService) {}

  
  /*@ApiCreatedResponse({
    type: Rule, // aqui definimos o tipo de resposta
  })*/ 
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

  /*@ApiCreatedResponse({
    type: Rule, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/rule');
    return result.data
    
    //return await this.rule.findAll();
  }

  /*@ApiCreatedResponse({
    type: Rule, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/rule/' + id);
    return result.data
    
    //return await this.rule.findOne(+id);
  }

  /*@ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  })*/ 
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

  /*@ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/rule/' + id);
    return result.data
    //return await this.rule.remove(+id);
  }



}
