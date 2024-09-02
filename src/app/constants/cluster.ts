import { faker } from "@faker-js/faker";

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
