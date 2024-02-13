import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateGroupRuleDto } from 'src/dto/service-user/create-group-rule.dto';
import { UpdateGroupRuleDto } from 'src/dto/service-user/update-group-rule.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';


@ApiTags('GroupRule') // Titulo Da Cadeia de Metodos
@Controller('service-user/group-rule')
export class GroupRuleController {
    
    constructor(private readonly httpService: HttpService) {}

    
  /*@ApiCreatedResponse({
    type: GroupRule, // aqui definimos o tipo de resposta
  })*/
   
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

  /*@ApiCreatedResponse({
    type: GroupRule, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group-rule');
    return result.data

    //return await  this.groupRule.findAll();
  }

  /*@ApiCreatedResponse({
    type: GroupRule, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group-rule/' + id);
    return result.data
    
    //return await  this.groupRule.findOne(+id);
  }

  /*@ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGroupRuleDto: UpdateGroupRuleDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/group-rule/' + id,
      updateGroupRuleDto)
    
    return result.data
    //return await  this.groupRule.update(+id, updateGroupRuleDto);
  }

  /*@ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) */
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/group-rule/' + id);
    
    return result.data

    //return await  this.groupRule.remove(+id);
  }

}
