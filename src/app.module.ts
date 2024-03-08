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
import { BrandController } from './controllers/service-product/brand.controller';
import { CategoryController } from './controllers/service-product/category.controller';
import { ProductSizeController } from './controllers/service-product/product_size.controller';
import { ProductController } from './controllers/service-product/product.controller';
import { SizeController } from './controllers/service-product/size.controller';



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
    UserSiteController,
    BrandController,
    CategoryController,
    ProductSizeController,
    ProductController,
    SizeController
  ],
  providers: [
    AccessTokenStrategy, 
    RefreshTokenStrategy,
  ],
})
export class AppModule {}
