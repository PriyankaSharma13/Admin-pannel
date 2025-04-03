import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { BsThreeDots } from "react-icons/bs";

const BudgetReport = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const budgetChart = echarts.init(chartRef.current);

      budgetChart.setOption({
        legend: {
          data: ["Allocated Budget", "Actual Spending"],
        },
        radar: {
          indicator: [
            { name: "Sales", max: 6500 },
            { name: "Administration", max: 16000 },
            { name: "Information Technology", max: 30000 },
            { name: "Customer Support", max: 38000 },
            { name: "Development", max: 52000 },
            { name: "Marketing", max: 25000 },
          ],
        },
        series: [
          {
            name: "Budget vs Spending",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "Allocated Budget",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "Actual Spending",
              },
            ],
          },
        ],
      });

      // Dispose of the chart instance on component unmount
      return () => {
        budgetChart.dispose();
      };
    }
  }, []);

  return (
    <div className="custom-card bg-white shadow-lg rounded-lg">
      <div className="card-body pb-0">
        <div className="flex justify-between p-6">
          <h5 className="text-lg font-semibold">
            Budget Report <span className="text-gray-500">| This Month</span>
          </h5>
          <button className="text-gray-500 hover:text-gray-800">
            <BsThreeDots />
          </button>
        </div>
        <div
          ref={chartRef}
          style={{ minHeight: "400px" }}
          className="echart"
        />
      </div>
    </div>
  );
};

export default BudgetReport;
