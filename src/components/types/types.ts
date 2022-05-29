import { IUser } from "./IUser";
export interface IData {
  user: IUser[];
  isLoading: boolean;
  isError: string;
}
