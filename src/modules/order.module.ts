import { Module } from '@nestjs/common';
import { OrderController } from 'src/controllers';
import { OrderService } from 'src/services';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
