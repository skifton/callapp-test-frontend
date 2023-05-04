import { create } from 'zustand';
import { IUser } from "../models/user.model";

type DataStoreState = {
  data: IUser[];
  setData: (data: IUser[]) => void;
};

export const useDataStore = create<DataStoreState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}));
