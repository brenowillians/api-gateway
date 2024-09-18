import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserSiteDto } from 'src/dto/service-user/create-user-site.dto';
import { UpdateUserSiteDto } from 'src/dto/service-user/update-user-site.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { SigninUserSiteDto } from 'src/dto/service-user/signin-user-site.dto';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';
import { ResultUserSiteDto } from 'src/dto/service-user/result-user-site.dto';
import { ListResultUserSiteDto } from 'src/dto/service-user/list-result-user-site-dto';
import { ListCriteriaUserSiteDto } from 'src/dto/service-user/list-criteria-user-site.dto';
import { SendMailDTO } from 'src/dto/service-user/send-mail.dto'


@ApiTags('UserSite') // Titulo Da Cadeia de Metodos
@Controller('service-user/user-site')
export class UserSiteController {
            
    
    constructor(private readonly httpService: HttpService) {}

    @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultUserSiteDto, // aqui definimos o tipo de resposta
  }) 
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

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultUserSiteDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/user-site');
    return result.data
    //return await this.userSite.findAll();
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultUserSiteDto, // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/user-site/' + id);
    return result.data
    
    //return await this.userSite.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  }) 
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

  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  }) 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/user-site/' + id);
    return result.data
    //return await this.userSite.remove(+id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ResultUserSiteDto, // aqui definimos o tipo de resposta
  }) 
  @Post('signin')
  async signin(@Body() signinUserSiteDto: SigninUserSiteDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/user-site/signin',signinUserSiteDto

    );
    return result.data
    //return await this.userSite.signin(signinUserSiteDto);
  }

  @Post('get-code')
  async getCode(@Body() sendMailDTO: SendMailDTO) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/user-site/get-code',sendMailDTO

    );
    return result.data
    //return await this.userSite.signin(signinUserSiteDto);
  }
  
  @ApiBearerAuth()
  @ApiCreatedResponse({
    type: ListResultUserSiteDto, // aqui definimos o tipo de resposta
  })
  @UseGuards(AccessTokenGuard)
  @Post('list')
  async list(@Body() ListCriteriaUserSiteDto: ListCriteriaUserSiteDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/user-site/list',ListCriteriaUserSiteDto

    );
    return result.data
    //return await this.userSite.list(ListCriteriaUserSiteDto);
  }

  /*@UseGuards(RefreshTokenGuard)
  @Get('refresh/')
  async refresh(@Req() req: Request) {
    console.log(req.user['idUser'])
    const userId = req.user['idUser'];
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/staff/refresh/' + userId);
    return result.data
    //return await this.staff.findOne(+id);
  }*/

}
