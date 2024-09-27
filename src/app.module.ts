import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { KiotvietModule } from './kiotviet/kiotviet.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.teidd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    ),
    KiotvietModule,
  ],
  providers: [AppService],
})
export class AppModule {}
