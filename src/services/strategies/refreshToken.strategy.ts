import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';


type JwtPayload = {
  source: string;
  idUser: number;
};

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly httpService: HttpService

  ) 
  {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_REFRESH_KEY,
      passReqToCallback: true,
    });
  }

  
  async validate(req: Request, payload: JwtPayload) {
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim();

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

    
    return { ...payload, refreshToken };
  }
}