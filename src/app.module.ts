import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModule } from 'nest-knexjs';
// import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { CarsModule } from './cars/cars.module';
import { CompaniesModule } from './companies/companies.module';
import { ZipCodesModule } from './zip_codes/zip_codes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        config: {
          client: 'pg',
          connection: {
            host: config.get('POSTGRESS_HOST'),
            database: config.get('POSTGRESS_DB'),
            user: config.get('POSTGRESS_USERNAME'),
            password: config.get('POSTGRESS_PASSWORD'),
            ssl: {
              rejectUnauthorized: false,
            },
          },
        },
      }),
    }),
    OrdersModule,
    CarsModule,
    CompaniesModule,
    ZipCodesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
