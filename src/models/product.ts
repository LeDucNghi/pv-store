import { User } from "./user";

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
  tags?: Tag[];
}

export interface Tag {
  id: string;
  tag: string;
}

export interface Comments {
  id: string;
  user: User;
  comment: string;
  images?: string[];
  rate: number;
  date: Date;
}

export interface CommentPayload {
  comment: string;
  rate: number;
  username: string;
  email: string;
}
