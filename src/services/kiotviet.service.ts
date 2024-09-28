import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosRequestConfig } from 'axios';
import { Model } from 'mongoose';
import { lastValueFrom } from 'rxjs';
import {
  KiotVietTokenPayload,
  OrderDetailResponse,
  OrderListResponse,
  OrderQueryParams,
  ProductListQueryParams,
} from 'src/dtos';
import { KiotVietToken } from 'src/schemas/kiotviet-token.schema';
import { isNearyExpire } from './../utils/date';

@Injectable()
export class KiotvietService {
  constructor(
    @InjectModel(KiotVietToken.name) private tokenModel: Model<KiotVietToken>,

    private readonly axios: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async generateKiotvietToken(): Promise<KiotVietTokenPayload> {
    const clientId = this.configService.get('KIOTVIET_CLIENT_ID');
    const clientSecret = this.configService.get('KIOTVIET_CLIENT_SECRET');
    const grandType = this.configService.get('KIOTVIET_GRAND_TYPE');

    try {
      const data = {
        scopes: 'PublicApi.Access',
        grant_type: grandType,
        client_id: clientId,
        client_secret: clientSecret,
      };

      const headers: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };

      const kiotVietToken = await this.tokenModel.findOne({
        prefix: 'kiotviet',
      });

      if (kiotVietToken) {
        // check if token is neary expire - 1 day
        const isCloserExpire = isNearyExpire(kiotVietToken.expires_in, 1);

        if (isCloserExpire) {
          // true
          // refresh token
          // else continue return old token

          const res = await lastValueFrom(
            this.axios.post(
              'https://id.kiotviet.vn/connect/token',
              data,
              headers,
            ),
          );

          await this.tokenModel.findOneAndUpdate(
            { id: kiotVietToken._id },
            {
              access_token: res.data.access_token,
              expires_in: res.data.expires_in,
              createdDate: Date.now(),
            },
            { new: true },
          );

          await kiotVietToken.save();
        } else {
          return kiotVietToken;
        }
      } else {
        const res = await lastValueFrom(
          this.axios.post(
            'https://id.kiotviet.vn/connect/token',
            data,
            headers,
          ),
        );

        const newToken = new this.tokenModel({
          access_token: res.data.access_token,
          clientId: res.data.clientId,
          clientSecret: res.data.clientSecret,
          token_type: res.data.token_type,
          scope: res.data.scope,
          expires_in: res.data.expires_in,
          createdDate: Date.now(),
          prefix: 'kiotviet',
          service: 'kiotviet',
        });

        await newToken.save();

        return res.data;
      }
    } catch (error: any) {
      console.log('🚀 ~ AuthService ~ error:', error);

      throw new HttpException(
        `${error.response.data.error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findProduct(id: string) {
    try {
      const kiotvietToken = await this.generateKiotvietToken();

      const res = await lastValueFrom(
        this.axios.get(`https://public.kiotapi.com/products/${id}`, {
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

  async getAllProduct(query: ProductListQueryParams) {
    try {
      const kiotvietToken = await this.generateKiotvietToken();

      const res = await lastValueFrom(
        this.axios.get(
          `https://public.kiotapi.com/products?orderBy=${query.orderBy}&pageSize=20&currentItem=${query.currentItem}`,
          {
            headers: {
              Retailer: 'pvfood',
              Authorization: `Bearer ${kiotvietToken.access_token}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        ),
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

  async handleOrder() {}
  async getOrderList(query: OrderQueryParams): Promise<OrderListResponse> {
    const kiotvietToken = await this.generateKiotvietToken();

    try {
      const res = await lastValueFrom(
        this.axios.get(
          `https://public.kiotapi.com/orders?orderBy=${query.orderBy}&pageSize=20&currentItem=${query.currentItem}`,
          {
            headers: {
              Retailer: 'pvfood',
              Authorization: `Bearer ${kiotvietToken.access_token}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        ),
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
  async getOrderDetail(id: string): Promise<OrderDetailResponse> {
    const kiotvietToken = await this.generateKiotvietToken();

    try {
      const res = await lastValueFrom(
        this.axios.get(`https://public.kiotapi.com/orders/${id}`, {
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
}
