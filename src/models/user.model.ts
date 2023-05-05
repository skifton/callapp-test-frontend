export interface IUser {
  id?: string;
  name: string;
  email: string;
  gender: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
}

export interface IFormData {
  id?: number;
  name: string;
  email: string;
  gender: string;
  street: string;
  city: string;
  phone: string;
}

export const parseUserJsonBody = (formData: IFormData): IUser => {
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

export const parseUserToFormData = (user: IUser): IFormData => {
  return {
    name: user.name,
    email: user.email,
    gender: user.gender,
    street: user.address.street,
    city: user.address.city,
    phone: user.phone,
  };
};
