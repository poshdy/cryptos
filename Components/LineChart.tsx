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
    return new Date(ts.timestamp * 1000).toLocaleDateString();
  });

  const coinPrice = CoinHistory?.history?.map((pri) => pri.price);

  const data = {
    labels: TIME_STAPAMPS,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#FFA842",
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

  return (
    <div className="flex items-center justify-center w-full my-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
