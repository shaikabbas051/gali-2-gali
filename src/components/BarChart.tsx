import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { IonItem } from "@ionic/react";
ChartJS.register(...registerables);

interface IProps {}
export default function BarChart() {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"];

  const data = {
    labels: labels,
    datasets: [
      {
        // label: "",
        backgroundColor: "#1b4b58",
        borderColor: "green",
        data: [20, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  const options = {
    scales: {
      // to hide the grid lines
      x: {
        offset: true,
        // categoryPercentage: 1,
        // barPercentage: 1,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      // to hide the label
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div style={{ height: 260, width: "100%" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
