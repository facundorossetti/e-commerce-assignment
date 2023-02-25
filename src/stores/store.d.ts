export interface ProductDetails {
  company: String;
  createdAt: String;
  description: String;
  dob: String;
  id: String;
  price: Number;
  updatedAt: String;
}

export interface Product {
  details?: ProductDetails;
  id?: String;
  name?: String;
}