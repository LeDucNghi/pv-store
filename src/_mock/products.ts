import { Product } from "@/models";
import { faker } from "@faker-js/faker";
import { images } from "@/constants";

export const homeMenu: Product[] = [
  {
    id: "1",
    name: faker.commerce.productName(),
    images: [images.product1.src],
    description: faker.lorem.paragraph(1),
    goodsPrice: faker.commerce.price({
      min: 100,
      max: 200,
      dec: 0,
      symbol: "$",
    }),
    weight: Number(faker.number.binary(4)),
  },
  {
    id: "2",
    name: faker.commerce.productName(),
    images: [images.product1.src],
    description: faker.lorem.paragraph(1),
    goodsPrice: faker.commerce.price({
      min: 100,
      max: 200,
      dec: 0,
      symbol: "$",
    }),
  },
  {
    id: "3",
    name: faker.commerce.productName(),
    images: [images.product1.src],
    description: faker.lorem.paragraph(1),
    goodsPrice: faker.commerce.price({
      min: 100,
      max: 200,
      dec: 0,
      symbol: "$",
    }),
  },
  {
    id: "4",
    name: faker.commerce.productName(),
    images: [images.product1.src],
    description: faker.lorem.paragraph(1),
    goodsPrice: faker.commerce.price({
      min: 100,
      max: 200,
      dec: 0,
      symbol: "$",
    }),
  },
  {
    id: "5",
    name: faker.commerce.productName(),
    images: [images.product1.src],
    description: faker.lorem.paragraph(1),
    goodsPrice: faker.commerce.price({
      min: 100,
      max: 200,
      dec: 0,
      symbol: "$",
    }),
  },
  {
    id: "6",
    name: faker.commerce.productName(),
    images: [images.product1.src],
    description: faker.lorem.paragraph(1),
    goodsPrice: faker.commerce.price({
      min: 100,
      max: 200,
      dec: 0,
      symbol: "$",
    }),
  },
];
