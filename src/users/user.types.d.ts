export interface UserLoginPostRequest {
  name: string;
  email: string;
  password: string;

}

export interface UserLoginPostResponse {
  jwt: string;
}
