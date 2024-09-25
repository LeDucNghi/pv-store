import { Comments, Product } from "@/models";
import { SimpleFaker, faker, simpleFaker } from "@faker-js/faker";

import { images } from "@/constants";

const customSimpleFaker = new SimpleFaker();

export const homeMenu: Product[] = [...Array(6)].map((_, index) => ({
  id: Number(simpleFaker.string.uuid()),
  name: faker.commerce.productName(),
  images: [images.product1.src],
  description: faker.lorem.paragraph(1),
  basePrice: Number(faker.commerce.price({ min: 1000, max: 100000, dec: 0 })),
  weight: Number(faker.number.binary(4)),
}));

export const productList: Product[] = [...Array(20)].map((_, index) => ({
  id: Number(simpleFaker.string.uuid()),
  name: faker.commerce.productName(),
  images: [images.product1.src],
  description: faker.lorem.paragraph(1),
  basePrice: Number(faker.commerce.price({ min: 1000, max: 100000, dec: 0 })),
}));

export const weeklyOffer = {
  id: simpleFaker.string.uuid(),
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
  basePrice: faker.commerce.price({
    min: 1000,
    max: 2000,
    dec: 0,
  }),
};

export const prodImgGallery = [...Array(4)].map((_, index) => ({
  id: 1,
  img: images.product1,
}));

export const prodTags = [...Array(3)].map((_, index) => ({
  id: simpleFaker.string.uuid(),
  tag: customSimpleFaker.helpers.arrayElement(["burger", "bacon", "cheese"]),
}));

export const reviews: Comments[] = [...Array(3)].map((_, index) => ({
  id: simpleFaker.string.uuid(),
  user: {
    name: faker.internet.userName(),
    avatar: faker.image.avatarGitHub(),
  },
  comment: faker.lorem.paragraph({ min: 1, max: 3 }),
  images: [faker.image.url()],
  rate: customSimpleFaker.helpers.arrayElement([1, 2, 3, 4, 5]),
  date: faker.date.anytime(),
}));

export const userCart: Product[] = [...Array(2)].map((_, index) => ({
  id: Number(simpleFaker.string.uuid()),
  name: faker.commerce.productName(),
  images: [images.product1.src],
  description: faker.lorem.paragraph(1),
  basePrice: Number(faker.commerce.price({ min: 1000, max: 100000, dec: 0 })),
  quantity: customSimpleFaker.helpers.arrayElement([1, 2, 3, 4, 5]),
}));
