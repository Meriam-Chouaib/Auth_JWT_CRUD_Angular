export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  contactNumber: string;
  status: string;
  role: string;
}
export interface UserLogin {

  email: string;
  password: string;

}
