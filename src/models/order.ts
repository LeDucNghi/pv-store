export interface OrderParamsPayload {
  isApplyVoucher: boolean;
  purchaseDate: string;
  branchId: number;
  soldById: number;
  discount: number;
  description: string;
  totalPayment: number; //khách đã trả
  saleChannelId: number; // Id kênh bán hàng, nếu không truyền mặc định kênh khác, 348931 - shopee / 359252 - website
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
      note: string;
    }
  ];
  orderDelivery: {
    deliveryCode: number;
    price: number;
    receiver: string;
    contactNumber: string;
    address: string;
    locationName: string;
    wardName: string;
  };
  // "customer": {
  //     "id": long,
  //     "code": string,
  //     "name": string,
  //     "gender": boolean,
  //     "contactNumber": string,
  //     "address": string,
  //     "wardName": string,
  //     "email": string,
  // }
}
export interface OrderResponse {}
export interface OrderDetailResponse {}
