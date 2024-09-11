"use client";

import "./prods-list.scss";

import * as React from "react";

import CustomPagination from "@/app/_components/common/pagination/pagination";
import CustomProduct from "@/app/_components/common/product/product";
import { productList } from "@/_mock";

export interface IProductsListProps {}

export default function ProductsList(props: IProductsListProps) {
  const onPageChange = (value: number) => {
    console.log("🚀 ~ onPageChange ~ value:", value);
  };

  return (
    <div className="prods-list-container">
      {productList.slice(0, 9).map((prod, key) => {
        return (
          <div className="prod-item-wrapper" key={key}>
            <CustomProduct type="normal" direction="vertical" product={prod} />
          </div>
        );
      })}

      <div className="prods-list-pagination flex-center">
        <CustomPagination
          value={{ page: 1, limit: 9, totalPages: 67, totalRows: 600 }}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
