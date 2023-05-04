import { IUser } from "../models/user.model";

export const getFormDataFromUser = (user: IUser) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender,
    street: user.address.street,
    city: user.address.city,
    phone: user.phone,
  };
};
