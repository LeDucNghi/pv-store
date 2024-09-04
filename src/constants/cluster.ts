import { Product } from "@/models";
import { faker } from "@faker-js/faker";
import { images } from "./images";

export const bannerProducts = [
  {
    id: 1,
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraph(2),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
    weight: "200gr / 600 cal",
  },
  {
    id: 2,
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraph(2),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
    weight: "200gr / 600 cal",
  },
  {
    id: 3,
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraph(2),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
    weight: "200gr / 600 cal",
  },
  {
    id: 4,
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraph(2),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
    weight: "200gr / 600 cal",
  },
];

export const deliverySteps = [
  {
    id: 1,
    image: images.goicuon,
    name: "Chọn thức ăn",
    description: faker.lorem.paragraph(1),
    time: 0.5,
  },
  {
    id: 2,
    image: images.foodDelivery,
    name: "Giao hàng hoặc Mua mang về",
    description: faker.lorem.paragraph(1),
    time: 1.5,
  },
  {
    id: 3,
    image: images.foodPackage,
    name: "Thưởng thức món ăn",
    description: faker.lorem.paragraph(1),
    time: 2.5,
  },
];

export const specialOffers: Product[] = [
  {
    id: "1",
    name: faker.commerce.productName(),
    images: [images.productRv1.src],
  },
  {
    id: "2",
    name: faker.commerce.productName(),
    images: [images.productRv1.src],
  },
  {
    id: "3",
    name: faker.commerce.productName(),
    images: [images.productRv1.src],
  },
];
