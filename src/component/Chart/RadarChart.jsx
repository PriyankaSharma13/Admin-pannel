import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = () => {
  // Radar chart options and data
  const chartOptions = {
    series: [
      {
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      },
    ],
    chart: {
      height: 350,
      type: 'radar',
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June'],
    },
  };

  return (
    <div >
    <h5 className="text-[24px] font-semibold pb-4 text-[#012970]">Radar Chart</h5>
          {/* Render the Radar Chart using ReactApexChart */}
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="radar"
            height={chartOptions.chart.height}
          />
        </div>
  
  );
};

export default RadarChart;
