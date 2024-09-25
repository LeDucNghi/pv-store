"use client";

import "./prods-list.scss";

import CustomPagination from "@/app/_components/common/pagination/pagination";
import { VerticalProd } from "@/app/_components/common/product";
import { productList } from "@/_mock";
import { useProductList } from "@/hooks";

export interface IProductsListProps {}

export default function ProductsList(props: IProductsListProps) {
  const { data } = useProductList({});

  const onPageChange = (value: number) => {
    console.log("🚀 ~ onPageChange ~ value:", value);
  };

  return (
    <div className="prods-list-container">
      {data.data.map((prod, key) => {
        return (
          <div className="prod-item-wrapper" key={key}>
            <VerticalProd product={prod} />
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
