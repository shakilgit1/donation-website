import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Pie, PieChart } from "recharts";

const Statistics = () => {
  const [getItem, setGetItem] = useState([]);
  const loadData = useLoaderData();

  const donatePercentage = (getItem.length / loadData.length) * 100;
  const percent = parseFloat(donatePercentage.toFixed(2));
  const total = 100 - donatePercentage;
  const toFixed = parseFloat(total.toFixed(2));
  console.log(toFixed);

  useEffect(() => {
    const getFromLS = JSON.parse(localStorage.getItem("donate"));
    if (getFromLS) {
      setGetItem(getFromLS);
    }
  }, []);

  const data01 = [
    {
      name: "Group A",
      value: percent,
      // "fill" : "red"
    },
    {
      name: "Group C",
      value: toFixed,
      fill: "green",
    },
  ];

  return (
    <div className="w-10/12 mx-auto flex justify-center items-center">
      <PieChart width={730} height={550}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="red"
        />
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={150}
          outerRadius={80}
          fill="white"
          fillOpacity={50}
          label
        />
      </PieChart>
    </div>
  );
};

export default Statistics;
