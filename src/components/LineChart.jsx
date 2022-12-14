import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  // console.log("coinTimestamp", coinTimestamp);
  console.log("coinPrice", coinHistory);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="chart_header">
        <p className="chart_title">{coinName} Price Chart</p>
        <div className="price_container">
          <p level={5} className="price_change">
            Change: {coinHistory?.data?.change}%
          </p>
          <p level={5} className="current_price">
            Current {coinName} Price: $ {currentPrice}
          </p>
        </div>
      </div>
      {/* <Line data={data} options={options} /> */}
    </>
  );
};

export default LineChart;
