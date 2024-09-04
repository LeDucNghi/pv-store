export interface Product {
  id: string;
  code?: string;
  categories?: string[];
  stock?: number;
  images: string[];
  goodsCost?: number;
  goodsPrice?: number;
  weight?: number;
  name: string;
  description?: string;
}
