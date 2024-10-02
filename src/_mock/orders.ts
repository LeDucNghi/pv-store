import { SimpleFaker, faker, simpleFaker } from "@faker-js/faker";

import { OrderListResponse } from "@/models";
import { images } from "@/constants";

const customSimpleFaker = new SimpleFaker();

export const orderList: OrderListResponse[] = [...Array(10)].map(
  (_, index) => ({
    id: 10000346,
    code: "DHSPE_231012Q0WCJ1GW",
    purchaseDate: "2023-10-12T13:27:40.0000000",
    branchId: 417299,
    branchName: "Chi nhánh trung tâm",
    soldById: 573722,
    soldByName: "Kim Vy",
    customerId: 24655875,
    customerCode: "KHSPE40814680",
    customerName: "N******g",
    total: 41000.0,
    totalPayment: 0.0,
    status: 3,
    statusValue: "Hoàn thành",
    retailerId: 500345979,
    description:
      "Đơn hàng tự động tạo từ đơn Shopee 231012Q0WCJ1GW, người mua trucphuong1808",
    usingCod: true,
    modifiedDate: "2023-10-27T23:59:51.6700000",
    createdDate: "2023-10-27T23:59:46.2700000",
    orderDelivery: {
      serviceType: "0",
      status: 1,
      statusValue: "Chờ xử lý",
      price: 4430.0,
      receiver: "N******g",
      contactNumber: "******46",
      address:
        "******uận Cẩm Lệ Thành Phố Đà Nẵng, Phường Hòa Phát, Quận Cẩm Lệ, Đà Nẵng",
      locationId: 140,
      locationName: "Đà Nẵng - Quận Cẩm Lệ",
      wardName: "Phường Hòa Phát",
      partnerDeliveryId: 340834,
      partnerDelivery: {
        code: "SHOPEE",
        name: "SHOPEE",
      },
      latestStatus: 0,
    },
    SaleChannelId: 348931,
    PriceBookId: 0,
    Extra: '{"PriceBookId":{"Id":0,"Name":"Bảng giá chung"}}',
    orderDetails: [...Array(3)].map((_, index) => ({
      id: Number(simpleFaker.string.uuid()),
      name: faker.commerce.productName(),
      images: [images.product1.src],
      categoryName: faker.lorem.paragraph(1),
      status: 1,
      statusValue: customSimpleFaker.helpers.arrayElement([
        "Giao hàng thành công",
        "ĐÃ HỦY",
        "Đã gửi cho ĐVVC",
        "Đang giao hàng",
      ]),
      quantity: customSimpleFaker.helpers.arrayElement([1, 2, 3, 4, 5]),
      basePrice: Number(
        faker.commerce.price({ min: 1000, max: 100000, dec: 0 })
      ),
    })),
    SaleChannelName: "Tiệm Ăn Vặt Online Gò Vấp",
  })
);
