import { IUser } from "./user.model";

export interface IColumn {
  title?: string;
  dataIndex: string;
  key: string;
  render?: (value: string, record: IUser) => JSX.Element;
}
