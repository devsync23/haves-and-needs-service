export interface UserLoginPostRequest {
  email: string;
  password: string;
}

export interface UserLoginPostResponse {
  jwt: string;
}