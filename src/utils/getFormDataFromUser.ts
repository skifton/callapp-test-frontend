import { IFormData, IUser } from "../models/user.model";

export const getFormDataFromUser = (user: IUser): IFormData => {
  return {
    name: user.name,
    email: user.email,
    gender: user.gender,
    street: user.address.street,
    city: user.address.city,
    phone: user.phone,
  };
};
