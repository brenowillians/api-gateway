import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateStaffDto } from 'src/dto/service-user/create-staff.dto';
import { UpdateStaffDto } from 'src/dto/service-user/update-staff.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { SigninStaffDto } from 'src/dto/service-user/signin-staff.dto';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';



@ApiTags('Staff') // Titulo Da Cadeia de Metodos
@Controller('service-user/staff')
export class StaffController {      
       
    
    constructor(private readonly httpService: HttpService) {}
  
  /*@ApiCreatedResponse({
    type: Staff, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createStaffDto: CreateStaffDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/staff',createStaffDto

    );
    return result.data
    
    //returnawait  this.staff.create(createStaffDto);
  }

  /*@ApiCreatedResponse({
    type: Staff, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/staff');
    return result.data

    //return await  this.staff.findAll();
  }

  /*@ApiCreatedResponse({
    type: Staff, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/staff/' + id);
    return result.data
    //return await this.staff.findOne(+id);
  }

  /*@ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/staff/' + id,
    updateStaffDto
    );
    return result.data
   // return await this.staff.update(+id, updateStaffDto);
  }

  /*@ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/staff/' + id);
    return result.data
    //return await this.staff.remove(+id);
  }


  /*@ApiCreatedResponse({
    type: Staff, // aqui definimos o tipo de resposta
  })*/ 
  @Post('signin')
  async signin(@Body() signinStaffDto: SigninStaffDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/staff/signin',signinStaffDto

    );
    return result.data
    
    //return await this.staff.signin(signinStaffDto);
  }

}
