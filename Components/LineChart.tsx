import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = ({ CoinHistory }: { CoinHistory: CoinHistory }) => {
  const TIME_STAPAMPS = CoinHistory?.history?.reverse().map((ts) => {
    return new Date(ts.timestamp * 1000).toISOString().slice(11, 19);
  });

  const coinPrice = CoinHistory?.history?.map((pri) => pri.price);

  const data = {
    labels: TIME_STAPAMPS,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        // backgroundColor: "#000",
        borderColor: "#FF961B",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return <Line data={data} options={options}  />;
};

export default LineChart;
