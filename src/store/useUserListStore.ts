import { create } from "zustand";
import { IUser } from "../models/user.model";

interface IUserListStore {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

export const useUserListStore = create<IUserListStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));

export const getUsers = (state: IUserListStore): IUser[] => {
  return state.users;
};
