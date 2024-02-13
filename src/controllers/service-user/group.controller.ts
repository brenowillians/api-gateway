import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateGroupDto } from 'src/dto/service-user/create-group.dto';
import { UpdateGroupDto } from 'src/dto/service-user/update-group.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';


@ApiTags('Group') // Titulo Da Cadeia de Metodos
@Controller('service-user/group')
export class GroupController {
       
    
    constructor(private readonly httpService: HttpService) {}

    
  /*@ApiCreatedResponse({
    type: Group, // aqui definimos o tipo de resposta
  })*/
  @UseGuards(AccessTokenGuard) 
  @Post()
  async create(@Body() createGroupDto: CreateGroupDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/group',createGroupDto

    );
    return result.data
    
    //return await this.group.create(createGroupDto);
  }

  /*@ApiCreatedResponse({
    type: Group, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group');
    return result.data
    //return await this.group.findAll();
  }

  /*@ApiCreatedResponse({
    type: Group, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group/' + id);
    return result.data
    //return await this.group.findOne(+id);
  }

  /*@ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/group/' + id,
    updateGroupDto
    );
    return result.data
    //return await this.group.update(+id, updateGroupDto);
  }

  /*@ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/group/' + id);
    return result.data
    
    //return await this.group.remove(+id);
  }



}
