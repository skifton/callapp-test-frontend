import { IFormData, IUser } from "../models/user.model";

export const getUserFromFormData = (formData: IFormData): IUser => {
  return {
    name: formData.name,
    email: formData.email,
    gender: formData.gender,
    address: {
      street: formData.street,
      city: formData.city,
    },
    phone: formData.phone,
  };
};
