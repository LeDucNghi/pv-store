import { Inventory, InventorySchema } from 'src/schemas/inventory.schema';
import { Product, ProductSchema } from 'src/schemas/product.schema';

import { HttpModule } from '@nestjs/axios';
import { KiotvietModule } from 'src/kiotviet/kiotviet.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    KiotvietModule,
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
