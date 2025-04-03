import React from "react";
import LineChart from "./Chart/ LineChart";
import AreaChart from "./Chart/AreaChart";
import ColumnChart from "./Chart/ColumnChart";
import BarChart from "./Chart/BarChart";
import PieChart from "./Chart/PieChart";
import DonutChart from "./Chart/DonutChart";
import RadarChart from "./Chart/RadarChart";
import PolarAreaChart from "./Chart/PolarAreaChart";
import RadialBarChart from "./Chart/RadialBarChart";
import BubbleChart from "./Chart/BubbleChart";
import Footer from "./Footer";

function ChartContent() {
  return (
   <>
    <div className="ml-0 md:ml-[300px] p-4 mt-[45px]">
      <div className="overflow-x-auto">
        <div className="pagetitle mb-6">
          <h1 className="text-2xl font-bold">Different Charts</h1>
          <nav className="text-gray-600 text-sm">
            <ol className="breadcrumb flex space-x-2">
              <li className="breadcrumb-item">
                <a href="index.html" className="hover:underline text-blue-500">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">/ Charts</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-md p-4">
              <LineChart />
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <AreaChart />
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <ColumnChart />
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <BarChart />
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <PieChart />
            </div>
            <div >
              <DonutChart />
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <RadarChart />
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <PolarAreaChart />
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <RadialBarChart />
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <BubbleChart />
            </div>
          </div>
        </section>
      </div>
    
    </div>
    <Footer/>
   </>

  );
}

export default ChartContent;
