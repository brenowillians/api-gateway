import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateGroupDto } from 'src/dto/service-user/create-group.dto';
import { UpdateGroupDto } from 'src/dto/service-user/update-group.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultGroupDto } from 'src/dto/service-user/result-group.dto';
import { ListResultGroupDto } from 'src/dto/service-user/list-result-group-dto';
import { ListCriteriaGroupDto } from 'src/dto/service-user/list-criteria-group.dto';


@ApiTags('Group') // Titulo Da Cadeia de Metodos
@Controller('service-user/group')
export class GroupController {
       
    
    constructor(private readonly httpService: HttpService) {}


    @ApiBearerAuth()
@ApiCreatedResponse({
    type: ResultGroupDto, // aqui definimos o tipo de resposta
  })
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

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultGroupDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group');
    return result.data
    //return await this.group.findAll();
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultGroupDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group/' + id);
    return result.data
    //return await this.group.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  }) 
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

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/group/' + id);
    return result.data
    
    //return await this.group.remove(+id);
  }


  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultGroupDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() ListCriteriaGroupDto: ListCriteriaGroupDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/group/list',ListCriteriaGroupDto

    );
    return result.data
    //return await this.group.list(ListCriteriaGroupDto);
  }


}
