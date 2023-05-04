export interface IUser {
    id: number,
    name: string,
    email: string,
    gender: string,
    address: {
        street: string,
        city: string,
    },
    phone: string,
};

export interface IFormData {
    id?: number,
    name: string,
    email: string,
    gender: string,
    street: string,
    city: string,
    phone: string,
}
