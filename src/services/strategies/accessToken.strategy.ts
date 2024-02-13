import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';


type JwtPayload = {
  source: string;
  idUser: number;
};

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly httpService: HttpService

  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_KEY,
    });
  }

  async validate(payload: JwtPayload) {

    switch(payload.source){
      case "user":
        const resultUser= await  this.httpService.axiosRef
        .get(process.env.SERVICE_USER_URL + '/user-site/' + payload.idUser);

        if(resultUser.data){
          const userSite =resultUser.data
          if(!userSite || userSite.locked){
            throw new HttpException({data: null,}, HttpStatus.UNAUTHORIZED);    
          }
        }
        break;
      case "staff":
        const resultStaff= await  this.httpService.axiosRef
        .get(process.env.SERVICE_USER_URL + '/staff/' + payload.idUser);
        
        //const userStaff = await this.staffService.findOne(payload.idUser)
        if(resultStaff.data){
          const userStaff = resultStaff.data
          if(!userStaff || userStaff.locked){
            throw new HttpException({data: null,}, HttpStatus.UNAUTHORIZED);    
          }
        }
        break;
      default:
        throw new HttpException({data: null,}, HttpStatus.UNAUTHORIZED);      
    }  
    return payload;
  }
}