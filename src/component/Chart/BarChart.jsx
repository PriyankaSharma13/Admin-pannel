import React from 'react';
import ApexCharts from 'react-apexcharts';

const BarChart = () => {
  // Bar Chart options configuration
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true, // Makes the chart horizontal
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 
        'United States', 'China', 'Germany'],
    }
  };

  // Data for the chart
  const seriesData = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    }
  ];

  return (
    <div >
    <h5 className="text-[24px] font-semibold  pb-4 text-[#012970]">Bar Chart</h5>
          <ApexCharts options={chartOptions} series={seriesData} type="bar" height={350} />
        </div>
      
  );
};

export default BarChart;
