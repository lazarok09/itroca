declare interface iTrocaUser {
  id: number;
  email: string;
  name: string;
  age: number;
  address: string;
}
declare interface ITrocarUserCredentials extends iTrocaUser {
  token: string;
}
declare interface ITrocarUserCredentialsSignUp extends iTrocaUser {
  hash: string;
  token: string;
}

declare interface ITrocaProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}
