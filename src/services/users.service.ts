import axios from "axios";
import { useDataStore } from "../store/useDataStore";
import { IUser } from "../models/user.model";
import { useState } from "react";

export const getUser = async (userId: string) => {
  return await axios.get(`http://localhost:4000/users/${userId}`)
  .then((res) => {
    return res
  });
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
  return await axios
    .post(`http://localhost:4000/users`, newUser)
    .then((res) => {
      useDataStore.setState({ data: res.data });
      return res;
    });
};

export const updateUser = async (id: string, updatedUser: IUser) => {
  return await axios
    .put(`http://localhost:4000/users/${id}`, updatedUser)
    .then((res) => {
      useDataStore.setState({ data: res.data });
      return res;
    });
};

export const removeUser = async (
  userId: string,
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

  const removeUserHandler = (userId: string) => {
    removeUser(userId, isLoadingHandler);
  };

  return { isLoading, removeUser: removeUserHandler };
};
