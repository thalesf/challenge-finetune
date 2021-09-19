import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Protein", "Fat", "Carbohydrates"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
export default function Chart() {
  return (
    <div>
      <Pie
        style={{ width: 200, height: 200 }}
        data={data}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
