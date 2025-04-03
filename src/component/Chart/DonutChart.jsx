import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDots } from "react-icons/bs";

const DonutChartWebsite = () => {
  // State for toggling dropdown menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Donut chart options and data
  const chartOptions = {
    series: [1048, 735, 580, 484, 300],
    chart: {
      height: 300,
      type: "donut",
      toolbar: {
        show: true,
      },
    },
    labels: ["Search Engine", "Direct", "Email", "Union Ads", "Video Ads"],
    legend: {
      position: "top",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 400,
      markers: {
        width: 15,
        height: 15,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md  ">
        <div className="flex justify-between items-center pb-4">
          <h5 className="text-xl font-semibold text-gray-800">
            Website Traffic <span className="text-sm text-gray-500">| Today</span>
          </h5>
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
          >
            <BsThreeDots />
          </button>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute bg-white shadow-lg rounded-lg p-2 mt-2 w-40 right-0">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  Today
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  This Month
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  This Year
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Donut Chart */}
        <div className="pb-0">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="donut"
            height={chartOptions.chart.height}
          />
        </div>
    </div>
  );
};

export default DonutChartWebsite;
