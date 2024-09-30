export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  name: string;
  password: string;
  gender: string;
  birthDate?: Date;
  contactNumber: string;
  address: string;
  locationName: string;
  wardName: string;
  email: string;
}
