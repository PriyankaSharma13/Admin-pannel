import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  // Pie chart options and data
  const chartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      height: 350,
      type: 'pie',
      toolbar: {
        show: true
      }
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
  };

  return (
    <div >
    <h5 className="text-[24px] font-semibold pb-4 text-[#012970]">Pie Chart</h5>
          {/* Render the Pie Chart using ReactApexChart */}
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="pie"
            height={chartOptions.chart.height}
          />
        </div>
      
  );
};

export default PieChart;
