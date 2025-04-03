import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaCircle } from "react-icons/fa"; // Change to FaCircle for filled icon

const RecentActivity = () => {
  const [filter, setFilter] = useState("Today");

  const activities = [
    {
      time: "32 min",
      content: "Quia quae rerum explicabo officiis beatae",
      status: "success",
    },
    {
      time: "56 min",
      content: "Voluptatem blanditiis blanditiis eveniet",
      status: "danger",
    },
    {
      time: "2 hrs",
      content: "Voluptates corrupti molestias voluptatem",
      status: "primary",
    },
    {
      time: "1 day",
      content: "Tempore autem saepe occaecati voluptatem tempore",
      status: "info",
    },
    {
      time: "2 days",
      content: "Est sit eum reiciendis exercitationem",
      status: "warning",
    },
    {
      time: "4 weeks",
      content: "Dicta dolorem harum nulla eius. Ut quidem quidem sit quas",
      status: "muted",
    },
  ];

  // Function to return color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "text-green-700";
      case "danger":
        return "text-red-500";
      case "primary":
        return "text-blue-500";
      case "info":
        return "text-teal-300";
      case "warning":
        return "text-yellow-300";
      case "muted":
        return "text-gray-700";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="custom-card bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center pb-3">
        <h5 className="text-xl font-semibold text-gray-800">
          Recent Activity{" "}
          <span className="text-sm text-gray-500">| {filter}</span>
        </h5>
        <div className="relative">
          <button className="text-gray-500 hover:text-gray-800">
            <BsThreeDots size={20} />
          </button>
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow hidden">
            <button
              onClick={() => setFilter("Today")}
              className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            >
              Today
            </button>
            <button
              onClick={() => setFilter("This Month")}
              className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            >
              This Month
            </button>
            <button
              onClick={() => setFilter("This Year")}
              className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            >
              This Year
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="text-sm text-gray-500 w-20">{activity.time}</div>

            <div className="relative flex items-center">
              <div className="border-l-2 border-gray-300 h-12 mx-2"></div>

              <div
                className={`absolute top-[-7px] transform -translate-y-1/2 ${getStatusColor(
                  activity.status
                )}`}
              >
                <FaCircle
                  size={16}
                  className={`${getStatusColor(activity.status)}`}
                />
              </div>
            </div>

            {/* Activity content */}
            <div className="text-gray-700 text-sm leading-5 flex-1">
              {activity.content.includes("<a") ? (
                <span dangerouslySetInnerHTML={{ __html: activity.content }} />
              ) : (
                activity.content
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
