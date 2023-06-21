import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sentiment Analysis Results",
    },
  },
};

const CardBarChart = ({ positive, negative, total }) => {
  const data = {
    labels: ["positive", "negative", "total"],
    datasets: [
      {
        label: "Positive",
        borderColor: ["#57B4A3"],
        backgroundColor: ["#57B4A3"],
        data: [positive , 0 , 0],
        fill: false,
        barThickness: 25,
      },
      {
        label: "Negative",
        borderColor: ["#E05D3D"],
        backgroundColor: ["#E05D3D"],
        data: [0, negative, 0],
        fill: false,
        barThickness: 25,
      },
      {
        label: "Total",
        borderColor: ["#FFD567"],
        backgroundColor: ["#FFD567"],
        data: [0, 0, total],
        fill: false,
        barThickness: 25,
      },
      
    ],
  };
  

  return (
    <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
      <Bar options={options} data={data} />
    </div>
  );
};

export default CardBarChart;
