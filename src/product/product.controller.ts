import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @HttpCode(HttpStatus.OK)
  @Get('getProductList')
  getProductList() {
    return this.productService.getAllProduct();
  }

  @HttpCode(HttpStatus.OK)
  @Get('getProduct/:id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }
}
