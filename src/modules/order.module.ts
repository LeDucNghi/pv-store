import { KiotvietModule } from './kiotviet.module';
import { Module } from '@nestjs/common';
import { OrderController } from 'src/controllers';
import { OrderService } from 'src/services';

@Module({
  imports: [KiotvietModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
