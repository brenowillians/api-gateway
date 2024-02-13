import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { GroupRuleController } from './controllers/service-user/group-rule.controller';
import { AddressTypeController } from './controllers/service-user/address-type.controller';
import { GroupStaffController } from './controllers/service-user/group-staff.controller';
import { GroupController } from './controllers/service-user/group.controller';
import { RuleController } from './controllers/service-user/rule.controller';
import { StaffController } from './controllers/service-user/staff.controller';
import { UserAddressController } from './controllers/service-user/user-address.controller';
import { UserSiteController } from './controllers/service-user/user-site.controller';
import { AccessTokenStrategy } from './services/strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './services/strategies/refreshToken.strategy';



@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true,
    }),
    HttpModule,
  ],
  controllers: [
    AddressTypeController, 
    GroupRuleController, 
    GroupStaffController, 
    GroupController,
    RuleController,
    StaffController,
    UserAddressController,
    UserSiteController
  ],
  providers: [
    AccessTokenStrategy, 
    RefreshTokenStrategy,
  ],
})
export class AppModule {}
