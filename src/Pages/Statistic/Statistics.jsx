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
      value: toFixed,
      color: "red",
      
    },
    {
      name: "Group C",
      value: percent,
      color : "teal"
    },
  ];

  return (
    <div className="w-10/12 mx-auto flex justify-center items-center ">
    <div className=" mx-auto">     
    <PieChart width={700} height={700}>
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

      <div className="flex gap-10 text-center justify-center mb-16">
        <h2>Your Donation <span className="bg-teal-600 px-14 ml-4"></span> </h2>
        <h2>Total Donation <span className="bg-red-500 px-14 ml-4"></span></h2>
      </div>

    </div>

    </div>
  );
};

export default Statistics;
