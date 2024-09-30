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

export interface KiotVietTokenPayload {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
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

export interface DecodedToken {
  nbf: number;
  exp: number;
  iss: string;
  client_id: string;
  client_RetailerCode: string;
  client_RetailerId: string;
  client_UserId: string;
  client_SensitiveApi: string;
  client_GroupId: string;
  iat: number;
  scope: [string];
}
