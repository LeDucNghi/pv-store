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

export const productList: Product[] = [...Array(20)].map((_, index) => ({
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
}));

export const weeklyOffer = {
  id: "1",
  name: faker.commerce.productName(),
  images: [images.product1.src],
  description: [
    {
      id: 1,
      text: "Cremini Mushrooms",
    },
    {
      id: 2,
      text: "Pepperoni Slices",
    },
    {
      id: 3,
      text: "Homemade Marinara",
    },
    {
      id: 4,
      text: "Parmesan Cheese",
    },
    {
      id: 5,
      text: "Cheddar Cheese",
    },
    {
      id: 6,
      text: "Mozzarella Cheese",
    },
    {
      id: 7,
      text: "Extra Virgin Olive Oil",
    },
    {
      id: 8,
      text: "Salt, paper, italian seasoning",
    },
  ],
  goodsPrice: faker.commerce.price({
    min: 100,
    max: 200,
    dec: 0,
    symbol: "$",
  }),
};
