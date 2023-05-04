import React from "react";
import { Pie } from "@ant-design/plots";
import { groupBy } from "lodash";
import { useDataStore } from "../../store/useDataStore";

const Statistics: React.FC = () => {
  const users = useDataStore((state) => state.data);
  const usersByCity = groupBy(users, (user) => user.address.city);

  const data = Object.keys(usersByCity).map((city) => ({
    city,
    count: usersByCity[city].length,
  }));

  const totalUsers = data.reduce((sum, { count }) => sum + count, 0);

  const dataWithPercentage = data.map(({ city, count }) => ({
    city,
    percentage: Math.floor((count / totalUsers) * 100),
  }));

  const config = {
    className: "mt-32",
    appendPadding: 10,
    data: dataWithPercentage,
    angleField: "percentage",
    colorField: "city",
    radius: 1,
    legend: {
      position: undefined,
    },
    label: {
      type: "inner",
      offset: "-30%",
      content: "{percentage}",
    },
    interactions: [{ type: "element-active" }],
  };

  return <Pie {...config} />;
};

export default Statistics;
