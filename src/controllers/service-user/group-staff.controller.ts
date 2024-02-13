import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateGroupStaffDto } from 'src/dto/service-user/create-group-staff.dto';
import { UpdateGroupStaffDto } from 'src/dto/service-user/update-group-staff.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';



@ApiTags('GroupStaff') // Titulo Da Cadeia de Metodos
@Controller('service-user/group-staff')
export class GroupStaffController {
    
    
    constructor(private readonly httpService: HttpService) {}

    
  /*@ApiCreatedResponse({
    type: GroupStaff, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createGroupStaffDto: CreateGroupStaffDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/group-staff',createGroupStaffDto

    );
    return result.data
    /*return await this.groupStaff.create(createClienteDto);
  }*/
}

  /*@ApiCreatedResponse({
    type: GroupStaff, // aqui definimos o tipo de resposta
  })*/ 

  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group-staff');
    return result.data

    //return await this.groupStaff.findAll();
  }

  /*@ApiCreatedResponse({
    type: GroupStaff, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/group-staff/' + id);
    return result.data
    
    //return await this.groupStaff.findOne(+id);
  }

  /*@ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGroupStaffDto: UpdateGroupStaffDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/group-staff/' + id,
      updateGroupStaffDto
    );
    return result.data
    
    //return await this.groupStaff.update(+id, updateClienteDto);
  }

  /*@ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
      const result= await  this.httpService.axiosRef
      .delete(process.env.SERVICE_USER_URL + '/group-staff/' + id);
      return result.data
    //return await this.groupStaff.remove(+id);
  }


}
