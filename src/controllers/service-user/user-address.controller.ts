import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateUserAddressDto } from 'src/dto/service-user/create-user-address.dto';
import { UpdateUserAddressDto } from 'src/dto/service-user/update-user-address.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { AccessTokenGuard } from 'src/services/guards/accessToken.guard';


@ApiTags('UserAddress') // Titulo Da Cadeia de Metodos
@Controller('service-user/user-address')
export class UserAddressController { 
                
    
    constructor(private readonly httpService: HttpService) {}

  
  /*@ApiCreatedResponse({
    type: UserAddress, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Post()
  async create(@Body() createUserAddressDto: CreateUserAddressDto) {
    const result= await  this.httpService.axiosRef
    .post(
        process.env.SERVICE_USER_URL + '/user-address',createUserAddressDto

    );
    return result.data
    
    //return await this.userAddress.create(createUserAddressDto);
  }

  /*@ApiCreatedResponse({
    type: UserAddress, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get()
  async findAll() {
    const result =await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/user-address');
    return result.data
    //return await this.userAddress.findAll();
  }

  /*@ApiCreatedResponse({
    type: UserAddress, // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .get(process.env.SERVICE_USER_URL + '/user-address/' + id);
    return result.data
    //return await this.userAddress.findOne(+id);
  }

  /*@ApiCreatedResponse({
    description: "Registro atulizado", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserAddressDto: UpdateUserAddressDto) {
    const result= await  this.httpService.axiosRef
    .patch(process.env.SERVICE_USER_URL + '/user-address/' + id,
    updateUserAddressDto
    );
    return result.data
    
    //return await this.userAddress.update(+id, updateUserAddressDto);
  }

  /*@ApiCreatedResponse({
    description: "Registro excluido", // aqui definimos o tipo de resposta
  })*/ 
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result= await  this.httpService.axiosRef
    .delete(process.env.SERVICE_USER_URL + '/user-address/' + id);
    return result.data    
    
    //return await this.userAddress.remove(+id);
  }


}
