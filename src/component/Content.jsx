import React, { useState } from "react";
import Footer from "./Footer";
import CardSection from "./CardSection";
import { BsThreeDots } from "react-icons/bs";
import { newsItems, recentSales, topSellingProducts } from "../data/data";
import BudgetReport from "./Budget-Report";
import DonutChartWebsite from "./Chart/DonutChart";
import RecentActivity from "./CardDashboard/RecentActivity";
import LineChart from "./Chart/LineChart";

const Dashboard = () => {
  const [filter, setFilter] = useState("Today");

  return (
    <>
      <div className="ml-0 md:ml-[300px] p-4 mt-[45px]">
       <div className="overflow-x-auto sm:overflow-visible">
       <div className="pagetitle mb-4">
          <h1 className="text-lg md:text-xl font-bold mb-2">Dashboard</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex space-x-2 text-sm text-gray-500">
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="font-medium text-gray-700">Dashboard</li>
            </ol>
          </nav>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="flex flex-col gap-4 col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2">
            {/* Card Section */}
            <div className="flex justify-between gap-4">
              <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-[48.5%]">
                <CardSection
                  title="Sales"
                  subtitle="Today"
                  icon={{
                    name: "MdShoppingCart",
                    bgColor: "blue",
                    color: "blue",
                  }}
                  value="145"
                  trend={{
                    text: "12% ",
                    color: "text-green-600",
                    detail: "increase",
                  }}
                  className="p-4"
                />
              </div>
             
              <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-[48.5%]">
                <CardSection
                  title="Revenue"
                  subtitle="This Month"
                  icon={{
                    name: "FaDollarSign",
                    bgColor: "red", color: "red"
                  }}
                  value="$3,264"
                  trend={{
                    text: "12% ",
                    color: "text-green-600",
                    detail: "increase",
                  }}
                  className="p-4"
                />
              </div>
            </div>

            {/* Customers Card */}
            <CardSection
              title="Customers"
              subtitle="This Year"
              icon={{ name: "IoPerson", bgColor: "red", color: "red" }}
              value="1,244"
              trend={{
                text: "12%",
                color: "text-red-600",
                detail: "decrease",
              }}
              className="p-4"
            />

            {/* Line Chart */}
            <div className="mt-4 bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h5 className="text-xl font-semibold text-gray-800">
                  Reports <span className="text-sm text-gray-500">| Today</span>
                </h5>
                <button className="text-gray-500 hover:text-gray-800">
                  <BsThreeDots />
                </button>
              </div>
              <div id="reportsChart" className="mt-4">
                <LineChart />
              </div>
            </div>

            {/* Recent Sales Table */}
            <div className="mt-7 bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-between items-center">
                <h5 className="text-2xl font-semibold text-gray-800">
                  Recent Sales{" "}
                  <span className="text-sm text-gray-500">| Today</span>
                </h5>
                <button className="text-gray-500 hover:text-gray-800 p-2 rounded-md">
                  <BsThreeDots />
                </button>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between space-x-6">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <select className="py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 w-full sm:w-40">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                  <h4 className="text-sm text-gray-700">entries per page</h4>
                </div>

                <form className="flex items-center w-full sm:w-auto">
                  <input
                    type="text"
                    name="query"
                    placeholder="Search"
                    title="Enter search keyword"
                    className="py-2 pl-4 pr-10 border border-gray-300 w-full sm:w-40 rounded-md focus:ring-2 focus:ring-blue-400"
                  />
                </form>
              </div>

              {/* Table */}
              <div className="overflow-x-auto mt-6">
                <table className="min-w-full table-auto border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-600">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        #
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Customer
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Product
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Amount
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSales.map((sale) => (
                      <tr key={sale.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-6 py-4">
                          {sale.id}
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          {sale.customer}
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          {sale.product}
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          {sale.amount}
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded text-white`}
                            style={{ backgroundColor: sale.statusColor }}
                          >
                            {sale.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-6 flex justify-between items-center">
                  <h4 className="text-sm text-gray-600">
                    Showing 1 to 5 of entries
                  </h4>
                  <button className="text-gray-600 hover:text-blue-700 text-sm">
                    View All
                  </button>
                </div>
              </div>
            </div>

            {/* Top Selling Products Table */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="flex justify-between items-center">
                    <h5 className="text-xl font-semibold text-gray-800">
                      Top Selling Products{" "}
                      <span className="text-sm text-gray-500">| Today</span>
                    </h5>
                    <button className="text-gray-500 hover:text-gray-800">
                      <BsThreeDots />
                    </button>
                  </div>
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left border border-gray-300">
                            Preview
                          </th>
                          <th className="px-4 py-2 text-left border border-gray-300">
                            Product
                          </th>
                          <th className="px-4 py-2 text-left border border-gray-300">
                            Price
                          </th>
                          <th className="px-4 py-2 text-left border border-gray-300">
                            Sold
                          </th>
                          <th className="px-4 py-2 text-left border border-gray-300">
                            Revenue
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {topSellingProducts.map((product) => (
                          <tr key={product.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 text-center border border-gray-300">
                              <img
                                src={product.preview}
                                alt="Product"
                                className="w-10 h-10 rounded"
                              />
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                              {product.name}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                              {product.price}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                              {product.sold}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">
                              {product.revenue}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-4 col-span-1">
          <div className="w-full lg:w-[350px] xl:w-[370px]">
              <RecentActivity />
            </div>
            <div className="w-full lg:w-[350px] xl:w-[370px]">
              <BudgetReport />
            </div>
            <div className="w-full lg:w-[350px] xl:w-[370px]">
              <DonutChartWebsite />
            </div>
            <div className="bg-white shadow-md rounded-lg w-full lg:w-[350px] xl:w-[370px] ">
                {/* Card Body */}
                <div className="flex justify-between p-4">
                  <h5 className="text-lg font-semibold">
                    Recent Activity{" "}
                    <span className="text-gray-500">| {filter}</span>
                  </h5>
                  <button
                    className="text-gray-500"
                    onClick={() =>
                      setFilter(filter === "Today" ? "This Month" : "Today")
                    }
                  >
                    <BsThreeDots />
                  </button>
                </div>

                {/* -------- News Items --------- */}
                <div className="news p-3">
                  {newsItems.map((item, index) => (
                    <div
                      key={index}
                      className="post-item mb-4 flex items-center"
                    >
                      <img
                        src={item.imgSrc}
                        alt={`News ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-semibold">
                          <a
                            href="#"
                            className="text-gray-800 hover:text-blue-500"
                          >
                            {item.title}
                          </a>
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
       </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
