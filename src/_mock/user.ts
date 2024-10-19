import { faker, simpleFaker } from "@faker-js/faker";

export const addresses = [...Array(5)].map((_, index) => ({
  id: Number(simpleFaker.string.uuid()),
  receiver: faker.person.fullName(),
  phoneNumber: faker.phone.number(),
  address: faker.location.streetAddress(),
  location: `${faker.location.city()} - ${faker.location.country()}`,
}));
