import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa"; // Import FaDollarSign
import { IoPerson } from "react-icons/io5";

const CardSection = ({ title, subtitle, icon, value, trend }) => {
  const { text, color, detail } = trend || {};

  // Dynamically render the icon based on the `name` prop
  const renderIcon = () => {
    switch (icon.name) {
      case "MdShoppingCart":
        return <MdOutlineShoppingCart className="w-6 h-6" />;
      case "FaDollarSign":
        return <FaDollarSign className="w-6 h-6" />;
        case "IoPerson":
          return <IoPerson className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="col-xxl-4 col-md-6">
      <div className="custom-card info-card sales-card bg-white shadow-md rounded-lg">
        <div className="card-body p-6">
          <div className="flex justify-between items-center mb-4">
            <h5 className="card-title text-xl font-semibold">
              {title}{" "}
              <span className="text-gray-500 test-sm">| {subtitle}</span>
            </h5>
            <button className="text-gray-500 hover:text-gray-800">
              <BsThreeDots />
            </button>
          </div>
          <div className="flex items-center mt-4">
            <div
              className={`card-icon rounded-full bg-${icon.bgColor}-500 text-white flex items-center justify-center w-12 h-12`}
            >
              {renderIcon()} {/* Render the dynamic icon */}
            </div>
            <div className="ps-3">
              <h6 className="text-2xl font-semibold">{value}</h6>
              <span className="text-green-500 text-sm font-bold">{text}</span>
              {detail && (
                <span className="text-gray-500 text-sm">{detail}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
