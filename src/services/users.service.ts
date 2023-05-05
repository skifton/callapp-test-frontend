import axios from "axios";
import { IUser } from "../models/user.model";
import { useState } from "react";
import { useUserListStore } from "../store/useUserListStore";

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
    .then((response) => useUserListStore.setState({ users: response.data }))
    .finally(() => {
      setIsLoading(false);
    });
};

export const createUser = async (newUser: IUser) => {
  return await axios
    .post(`http://localhost:4000/users`, newUser)
    .then((res) => {
      useUserListStore.setState({ users: res.data });
      return res;
    });
};

export const updateUser = async (id: string, updatedUser: IUser) => {
  return await axios
    .put(`http://localhost:4000/users/${id}`, updatedUser)
    .then((res) => {
      useUserListStore.setState({ users: res.data });
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
    .then((response) => useUserListStore.setState({ users: response.data }))
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
