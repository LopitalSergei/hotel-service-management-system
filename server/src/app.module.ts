import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from './db/typeorm.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './models/users/users.module';
import { RolesModule } from './models/roles/roles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `environment/.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule,
    UsersModule,
    RolesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
