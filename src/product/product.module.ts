import { Inventory, InventorySchema } from 'src/schemas/inventory.schema';
import { Product, ProductSchema } from 'src/schemas/product.schema';

import { AuthModule } from 'src/auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    AuthModule,
    HttpModule,
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Inventory.name, schema: InventorySchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
