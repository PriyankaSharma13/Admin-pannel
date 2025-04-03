import React, { useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const chartRef = useRef(null);

  const options = {
    chart: {
      height: 350,
      type: "area", 
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth", 
      width: 2,
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], 
        opacity: 0.5,
      },
    },
    xaxis: {
      type: "datetime", 
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  // Data series for the chart
  const series = [
    {
      name: "Sales",
      data: [31, 40, 28, 51, 42, 82, 56],
    },
    {
      name: "Revenue",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Customers",
      data: [15, 11, 32, 18, 9, 24, 11],
    },
  ];

  return (
    <div >
    <h5 className="text-[24px] font-semibold pb-4 text-[#012970]">Line Chart</h5>
      <ReactApexChart
        options={options} 
        series={series}  
        type="area"      
        height={350}    
      />
    </div>
  );
};

export default LineChart;
