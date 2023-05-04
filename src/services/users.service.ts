import axios from "axios";
import { useDataStore } from "../store/useDataStore";
import { IUser } from "../models/user.model";

export const getUser = async (userId: number) => {
  const response = await axios.get(`http://localhost:4000/users/${userId}`);
  const data = response.data;

  return data;
};

export const getUserList = async () => {
    const response = await axios.get('http://localhost:4000/users');
    const data = response.data;

    useDataStore.setState({ data });
}

export const createUser = async (newUser: IUser) => {
  const response = await axios.post(`http://localhost:4000/users`, newUser);
  const data = response.data;

  useDataStore.setState({ data });
};

export const updateUser = async (userId: number, updateData: IUser) => {
  const response = await axios.put(`http://localhost:4000/users/${userId}`, updateData);
  const data = response.data;

  useDataStore.setState({ data });
};

export const removeUser = async (userId: number) => {
  const response = await axios.delete(`http://localhost:4000/users/${userId}`);
  const data = response.data;

  useDataStore.setState({ data });
}