import React from "react";
import { Pie } from "@ant-design/plots";
import { getStatisticForPie } from "../../utils/getStatisticForPie";
import { getUsers, useUserListStore } from "../../store/useUserListStore";

const Statistics: React.FC = () => {
  const users = useUserListStore(getUsers);

  const dataWithPercentage = getStatisticForPie(users);

  const pieOptions = {
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

  return <Pie {...pieOptions} />;
};

export default Statistics;
