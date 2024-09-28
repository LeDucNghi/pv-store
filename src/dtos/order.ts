export interface OrderQueryParams {
  pageSize: number;
  currentItem: number;
  orderBy: string;

  branchIds?: number[];
  customerIds?: number[];
  customerCode?: string;
  status?: number[];
  includePayment?: boolean;
  includeOrderDelivery?: boolean;
  lastModifiedFrom?: Date;
  toDate?: Date;
  orderDirection?: string;
  createdDate?: Date;
  saleChannelId?: number;
}

export interface OrderListResponse {
  total: number;
  pageSize: number;
  data: [
    {
      id: number;
      code: string;
      purchaseDate: Date;
      branchId: number;
      branchName: string;
      soldById: number;
      soldByName: string;
      customerId: number;
      customerCode: string;
      customerName: string;
      total: number;
      totalPayment: number;
      status: number;
      statusValue: string;
      retailerId: number;
      description: string;
      usingCod: true;
      modifiedDate: Date;
      createdDate: Date;
      SaleChannelId: number;
      PriceBookId: number;
      Extra: any;
      orderDetails: [
        {
          productId: number;
          productCode: string;
          productName: string;
          quantity: number;
          price: number;
          discount: number;
          discountRatio: number;
          viewDiscount: number;
        },
      ];
      SaleChannelName: string;
    },
  ];
}

export interface OrderDetailResponse {
  id: number; //Id đặt hàng
  code: string; //Mã đặt hàng
  purchaseDate: Date; // Ngày đặt hàng
  branchId: number; //Id chi nhánh
  branchName: string; //Tên chi nhánh
  soldById: number;
  soldByName: string;
  customerId: number; // Id khách hàng
  customerName: string; // Tên khách hàng
  total: number; // Khách cần trả
  totalPayment: number; //Khách đã trả

  discountRatio: number; // Giảm giá trên đơn theo %
  discount: number; // Giảm giá trên đơn theo tiền
  status: number; // trạng thái đơn đặt hàng
  statusValue: string; // trạng thái đơn đặt hàng bằng chữ
  description: string; // ghi chú
  usingCod: boolean;
  payments: [
    {
      id: number;
      code: string;
      amount: number;
      method: string;
      status: number;
      statusValue: string;
      transDate: Date;
      bankAccount: string;
      accountId: number;
    },
  ];

  orderDetails: {
    productId: number; // Id hàng hóa
    productCode: string;
    productName: string; //Tên hàng hóa bao gồm thuộc tính và đơn vị tính

    quantity: number; // Số lượng hàng hóa
    isMaster: boolean; //Tính năng thêm dòng, true: hàng hóa ở dòng chính, false: hàng hóa ở dòng phụ.

    price: number; //Giá trị
    discountRatio: number; // Giảm giá trên sản phẩm theo %
    discount: number; // Giảm giá trên sản phẩm theo tiền
    note: string; // Ghi chú hàng hóa
  };
  orderDelivery: {
    deliveryCode: string;
    type: number;
    price: number;
    receiver: string;

    contactNumber: string;
    address: string;
    locationId: number;
    locationName: string;
    weight: number;
    length: number;
    width: number;
    height: number;
    partnerDeliveryId: number;

    partnerDelivery: {
      code: string;
      name: string;
      address: string;
      contactNumber: string;
      email: string;
    };
  };

  invoiceOrderSurcharges: [
    {
      id: number;
      invoiceId: number;
      surchargeId: number;
      surchargeName: string;
      surValue: number;
      price: number;
      createdDate: Date;
    },
  ];

  retailerId: number; // Id cửa hàng
  modifiedDate: Date; // thời gian cập nhật
  createdDate: Date; //thời gian tạo
}

export interface OrderParamsPayload {
  isApplyVoucher: boolean; //Có apply voucher khi tạo đặt hàng không
  purchaseDate: Date;
  branchId: number;
  soldById: number;
  discount: number;
  description: string;
  totalPayment: number; //khách đã trả
  saleChannelId: number; // Id kênh bán hàng, nếu không truyền mặc định kênh khác,
  orderDetails: [
    {
      productId: number;
      productCode: string;
      productName: string;
      quantity: number;
      price: number;
      discount: number;
      discountRatio: number;
      viewDiscount: number;
      isMaster: true;
      note: '';
    },
  ];
  orderDelivery: {
    deliveryCode: string;
    price: number;
    receiver: string;
    contactNumber: string;
    address: string;
    locationName: string;
    wardName: string; // Tên phường
    partnerDelivery: {
      code: string;
      name: string;
    };
  };
  // "customer": {
  //     "id": long,
  //     "code": string,
  //     "name": string,
  //     "gender": boolean,
  //     "contactNumber": string,
  //     "address": string,
  //     "wardName": string, // Tên phường
  //     "email": string,
  // }
  // "Payments": [
  //     { // Thêm phương thức thanh toán bằng voucher
  //         "Method": "Voucher", // Giá trị mặc định là Voucher (không đổi)
  //         "MethodStr": "Voucher", // Giá trị mặc định là Voucher (không đổi)
  //         "Amount": 50000, // Giá trị của voucher
  //         "Id": -1, // Giá trị mặc định là -1 (không đổi)
  //         "AccountId": null, // Giá trị mặc định là null (không đổi)
  //         "VoucherId": 30996, // Id của voucher
  //         "VoucherCampaignId": 30087 // Id của đợt phát hành voucher
  //     }
  // ]
}
