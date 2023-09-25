import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  const [getItem, setGetItem] = useState([]);
  const loadData = useLoaderData();

  const donatePercentage = (getItem.length / loadData.length) * 100;
  const percent = parseFloat(donatePercentage.toFixed(2));
  // const p = percent;
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
      color : "red"
    },
    {
      name: "Group C",
      value: toFixed,
      color: "green",
    },
  ];

  return (
    <div className="w-10/12 mx-auto flex justify-center items-center">
    <div>     
    <PieChart width={600} height={600}>
  <Pie
    dataKey={`value`}
    isAnimationActive={false}
    data={data01}
    cx="50%"
    cy="50%"
    outerRadius={200}
    label
  >
    {data01.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
    ))}

  </Pie>
    </PieChart>

      <div className="flex gap-10 text-center">
        <h2>Your Donation: </h2>
        <h2>Total Donation</h2>
      </div>

    </div>

    </div>
  );
};

export default Statistics;
