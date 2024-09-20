export interface User {
  id?: number;
  code?: string;
  name: string;
  gender?: string;
  contactNumber?: string;
  address?: string;
  retailerId?: number;
  branchId?: number;
  locationName?: string;
  wardName?: string;
  modifiedDate?: Date;
  createdDate?: Date;
  avatar?: string;
  email?: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  name: string;
}
