import { groupBy } from "lodash";
import { IUser } from "../models/user.model";

export const getStatisticForPie = (users: IUser[]) => {
  const usersByCity = groupBy(users, (user) => user.address.city);

  const data = Object.keys(usersByCity).map((city) => ({
    city,
    count: usersByCity[city].length,
  }));

  const totalUsers = data.reduce((sum, { count }) => sum + count, 0);

  return data.map(({ city, count }) => ({
    city,
    percentage: Math.floor((count / totalUsers) * 100),
  }));
};
