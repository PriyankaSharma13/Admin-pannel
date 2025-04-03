import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = () => {
  // Radial Bar chart options and data
  const chartOptions = {
    series: [44, 55, 67, 83],
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // Custom formatter function
              return 249; // Example total value
            },
          },
        },
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  };

  return (
    <div >
    <h5 className="text-[24px] font-semibold pb-4 text-[#012970]">Radial Bar Chart</h5>
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="radialBar"
            height={chartOptions.chart.height}
          />
        </div>
      
  );
};

export default RadialBarChart;
