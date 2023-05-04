import axios from "axios";
import { useDataStore } from "../store/useDataStore";
import { IUser } from "../models/user.model";
import { useState } from "react";

export const getUser = async (userId: number) => {
  const response = await axios.get(`http://localhost:4000/users/${userId}`);
  const data = response.data;

  return data;
};

export const getUserList = async (
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);

  await axios
    .get("http://localhost:4000/users")
    .then((response) => useDataStore.setState({ data: response.data }))
    .finally(() => {
      setIsLoading(false);
    });
};

export const createUser = async (newUser: IUser) => {
  const response = await axios.post(`http://localhost:4000/users`, newUser);
  const data = response.data;

  useDataStore.setState({ data });
};

export const updateUser = async (userId: number, updateData: IUser) => {
  const response = await axios.put(
    `http://localhost:4000/users/${userId}`,
    updateData
  );
  const data = response.data;

  useDataStore.setState({ data });
};

export const removeUser = async (
  userId: number,
  setIsLoading: (isLoading: boolean) => void
) => {
  setIsLoading(true);

  await axios
    .delete(`http://localhost:4000/users/${userId}`)
    .then((response) => useDataStore.setState({ data: response.data }))
    .finally(() => {
      setIsLoading(false);
    });
};

export const useGetUserList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isLoadingHandler = (isLoadingNew: boolean) => {
    setIsLoading(isLoadingNew);
  };

  const getUserListHandler = () => {
    getUserList(isLoadingHandler);
  };

  return { isLoading, getUserList: getUserListHandler };
};

export const useRemoveUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isLoadingHandler = (isLoadingNew: boolean) => {
    setIsLoading(isLoadingNew);
  };

  const removeUserHandler = (userId: number) => {
    removeUser(userId, isLoadingHandler);
  };

  return { isLoading, removeUser: removeUserHandler };
};
