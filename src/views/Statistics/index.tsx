import React from "react";
import { Pie } from "@ant-design/plots";
import { useDataStore } from "../../store/useDataStore";
import { getStatisticForPie } from "../../utils/getStatisticForPie";

const Statistics: React.FC = () => {
  const users = useDataStore((state) => state.data);

  const dataWithPercentage = getStatisticForPie(users);

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
