export interface Product {
  id: string;
  code?: string;
  categories?: string[];
  stock?: number;
  images: string[];
  goodsCost?: number;
  goodsPrice?: string;
  weight?: number;
  name: string;
  description?: string;
  quantity?: number;
}
