import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { CreateStaffDto } from 'src/dto/service-user/create-staff.dto';
import { UpdateStaffDto } from 'src/dto/service-user/update-staff.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { SigninStaffDto } from 'src/dto/service-user/signin-staff.dto';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultStaffDto } from 'src/dto/service-user/result-staff.dto';
import { ListResultStaffDto } from 'src/dto/service-user/list-result-staff-dto';
import { ListCriteriaStaffDto } from 'src/dto/service-user/list-criteria-staff.dto';
import { RefreshTokenGuard } from 'src/services/guards/refreshToken.guard';
import { Request } from 'express';



@ApiTags('Staff') // Titulo Da Cadeia de Metodos
@Controller('service-user/staff')
export class StaffController {      
       
    
    constructor(private readonly httpService: HttpService) {}
  
    @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultStaffDto, // aqui definimos o tipo de resposta
  }) 
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
    @UseGuards(RefreshTokenGuard)
    @Get('refresh/')
    async refresh(@Req() req: Request) {
      console.log(req.user['idUser'])
      const userId = req.user['idUser'];
      const result= await  this.httpService.axiosRef
      .get(process.env.SERVICE_USER_URL + '/staff/refresh/' + userId);
      return result.data
      //return await this.staff.findOne(+id);
    }
  

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultStaffDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/staff');
    return result.data

    //return await  this.staff.findAll();
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultStaffDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/staff/' + id);
    return result.data
    //return await this.staff.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atualizado", // aqui definimos o tipo de resposta
  }) 
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

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/staff/' + id);
    return result.data
    //return await this.staff.remove(+id);
  }

  
  @ApiCreatedResponse({
    type: ResultStaffDto, // aqui definimos o tipo de resposta
  }) 
  @Post('signin')
  async signin(@Body() signinStaffDto: SigninStaffDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/staff/signin',signinStaffDto

    );
    return result.data
    
    //return await this.staff.signin(signinStaffDto);
  }

  
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultStaffDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() ListCriteriaStaffDto: ListCriteriaStaffDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/staff/list',ListCriteriaStaffDto

    );
    return result.data
    //return await this.staff.list(ListCriteriaStaffDto);
  }


}
