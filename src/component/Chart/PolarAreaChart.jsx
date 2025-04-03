import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PolarAreaChart = () => {
  const chartOptions = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      type: 'polarArea',
      height: 350,
      toolbar: {
        show: true
      }
    },
    stroke: {
      colors: ['#fff'] 
    },
    fill: {
      opacity: 0.8 
    }
  };

  return (
    <div >
    <h5 className="text-[24px] font-semibold pb-4 text-[#012970]">Polar Area Chart</h5>
          {/* Render the Polar Area Chart using ReactApexChart */}
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="polarArea"
            height={chartOptions.chart.height}
          />
        </div>
     
  );
};

export default PolarAreaChart;
