import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { Product } from 'src/schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    private readonly httpService: HttpService,
    private authService: AuthService,
  ) {}

  async getAllProduct() {
    try {
      const kiotvietToken = await this.authService.generateKiotvietToken();

      // const data = {
      //   orderBy: 'Name',
      //   pageSize: 9,
      //   currentItem: 1,
      //   includeInventory: true,
      //   includePricebook: true,
      //   IncludeSerials: true,
      //   IncludeBatchExpires: true,
      //   includeWarranties: true,
      //   includeRemoveIds: true,
      //   includeQuantity: true,
      //   productType: true,
      //   includeMaterial: true,
      //   isActive: true,
      //   includeSoftDeletedAttribute: true,
      // };

      const res = await lastValueFrom(
        this.httpService.get('https://public.kiotapi.com/products', {
          // params: { ...data },
          headers: {
            Retailer: 'pvfood',
            Authorization: `Bearer ${kiotvietToken.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ ProductService ~ getAllProduct ~ error:', error);
      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Get a product by id
   * @param id The id of the product
   * @returns The product
   */
  /******  5f6e8062-8dad-4dbf-a9a4-6bf56b9c2820  *******/
  async getProduct(id: string) {
    console.log('🚀 ~ ProductService ~ getProduct ~ id:', id);
    try {
      const kiotvietToken = await this.authService.generateKiotvietToken();

      const res = await lastValueFrom(
        this.httpService.get(`https://public.kiotapi.com/products/${id}`, {
          // params: { ...data },
          headers: {
            Retailer: 'pvfood',
            Authorization: `Bearer ${kiotvietToken.access_token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }),
      );

      return res.data;
    } catch (error) {
      console.log('🚀 ~ ProductService ~ getAllProduct ~ error:', error);
      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findProduct(id: string) {
    try {
      const product = await this.productModel.findOne({ id: id });

      if (product) {
        return product;
      }

      throw new HttpException('Wrong password or email!', HttpStatus.NOT_FOUND);
    } catch (error) {
      console.log('🚀 ~ ProductService ~ findProduct ~ error:', error);
    }
  }
}
