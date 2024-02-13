import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserSiteDto } from 'src/dto/service-user/create-user-site.dto';
import { UpdateUserSiteDto } from 'src/dto/service-user/update-user-site.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { SigninUserSiteDto } from 'src/dto/service-user/signin-user-site.dto';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';


@ApiTags('UserSite') // Titulo Da Cadeia de Metodos
@Controller('service-user/user-site')
export class UserSiteController {
            
    
    constructor(private readonly httpService: HttpService) {}

  
  /*@ApiCreatedResponse({
    type: UserSite, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createUserSiteDto: CreateUserSiteDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/user-site',createUserSiteDto

    );
    return result.data
    
    //return await this.userSite.create(createUserSiteDto);
  }

  /*@ApiCreatedResponse({
    type: UserSite, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/user-site');
    return result.data
    //return await this.userSite.findAll();
  }

  /*@ApiCreatedResponse({
    type: UserSite, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/user-site/' + id);
    return result.data
    
    //return await this.userSite.findOne(+id);
  }

  /*@ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserSiteDto: UpdateUserSiteDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/user-site/' + id,
    updateUserSiteDto
    );
    return result.data
    //return await this.userSite.update(+id, updateUserSiteDto);
  }

  /*@ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/user-site/' + id);
    return result.data
    //return await this.userSite.remove(+id);
  }

  /*@ApiCreatedResponse({
    type: UserSite, // aqui definimos o tipo de resposta
  })*/ 
  @Post('signin')
  async signin(@Body() signinUserSiteDto: SigninUserSiteDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/user-site/signin',signinUserSiteDto

    );
    return result.data
    //return await this.userSite.signin(signinUserSiteDto);
  }


}
