import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BubbleChart = () => {
  // Function to generate random data for the bubbles
  function generateData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
      series.push([x, y, z]);
      baseval += 86400000; // Increment the baseval (day in milliseconds)
      i++;
    }
    return series;
  }

  // Bubble chart data and options
  const chartOptions = {
    series: [
      {
        name: 'Bubble1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }),
      },
      {
        name: 'Bubble2',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }),
      },
      {
        name: 'Bubble3',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }),
      },
      {
        name: 'Bubble4',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, { min: 10, max: 60 }),
      },
    ],
    chart: {
      height: 333,
      type: 'bubble',
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.8,
    },
    xaxis: {
      tickAmount: 12,
      type: 'category',
    },
    yaxis: {
      max: 70,
    },
  };

  return (
    <div >
    <h5 className="text-[24px] font-semibold pb-4 text-[#012970]">Bubble Chart</h5>
          {/* Render the Bubble Chart using ReactApexChart */}
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="bubble"
            height={chartOptions.chart.height}
          />
        </div>
     
  );
};

export default BubbleChart;
