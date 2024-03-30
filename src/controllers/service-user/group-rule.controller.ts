import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateGroupRuleDto } from 'src/dto/service-user/create-group-rule.dto';
import { UpdateGroupRuleDto } from 'src/dto/service-user/update-group-rule.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultGroupRuleDto } from 'src/dto/service-user/result-group-rule.dto';
import { ListResultGroupRuleDto } from 'src/dto/service-user/list-result-group-rule-dto';
import { ListCriteriaGroupRuleDto } from 'src/dto/service-user/list-criteria-group-rule.dto';


@ApiTags('GroupRule') // Titulo Da Cadeia de Metodos
@Controller('service-user/group-rule')
export class GroupRuleController {
    
    constructor(private readonly httpService: HttpService) {}

   
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultGroupRuleDto, // aqui definimos o tipo de resposta
  })
   
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createGroupRuleDto: CreateGroupRuleDto) {
    
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/group-rule',createGroupRuleDto

    );
    return result.data
    //return await  this.groupRule.create(createGroupRuleDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultGroupRuleDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group-rule');
    return result.data

    //return await  this.groupRule.findAll();
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultGroupRuleDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group-rule/' + id);
    return result.data
    
    //return await  this.groupRule.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGroupRuleDto: UpdateGroupRuleDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/group-rule/' + id,
      updateGroupRuleDto)
    
    return result.data
    //return await  this.groupRule.update(+id, updateGroupRuleDto);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/group-rule/' + id);
    
    return result.data

    //return await  this.groupRule.remove(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultGroupRuleDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() ListCriteriaGroupRuleDto: ListCriteriaGroupRuleDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/group-rule/list',ListCriteriaGroupRuleDto

    );
    return result.data
    //return await this.groupRule.list(ListCriteriaGroupRuleDto);
  }


}
