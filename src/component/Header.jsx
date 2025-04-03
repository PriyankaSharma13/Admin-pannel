import React, { useState } from "react";
import { BiSearch, BiBell, BiChat } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/img/logo.png";
import profile from "../assets/img/profile-img.jpg";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const Header = ({ toggleSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleBellDropdown = (type) => {
    if (type === "notifications") {
      setShowNotification(!showNotification);
    }
  };
  // bg-gradient-to-r from-[#FA8072] to-[#FF681F]
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm p-2 z-50">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-8 h-8 " />
            <span className="hidden lg:block text-[#012970] ">NiceAdmin</span>
          </a>
          <IoMdMenu
            className="text-xl lg:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        {/* Search Bar */}
        <div className="relative flex items-center w-full sm:w-auto sm:max-w-lg sm:block hidden">
          <form className="flex items-center w-full">
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
              className="py-2 pl-4 pr-10 border border-gray-300 rounded-md w-full"
            />
            <button
              type="submit"
              title="Search"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <BiSearch />
            </button>
          </form>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="flex items-center space-x-6">
            {/* Notification Icon */}
            <div className="relative">
              {/* Bell Icon with Notification Count */}
              <Link
                to="#"
                onClick={() => toggleBellDropdown("notifications")}
                className="text-gray-700 hover:text-blue-500 relative"
              >
                <BiBell className="text-[26px] " />
                <span className="absolute top-0 right-0 w-4 h-4 text-xs bg-blue-500 text-white rounded-full flex items-center justify-center">
                  4
                </span>
              </Link>

              {/* Conditionally render the Notification component */}
              {showNotification && (
                <div className="fixed top-16 right-4 z-50">
                  <Notification />
                </div>
              )}
            </div>

            {/* Messages Icon */}
            <li className="relative">
              <a
                href="#"
                onClick={() => toggleBellDropdown("notifications")}
                className="text-gray-700 hover:text-blue-500"
              >
                <BiChat className="text-[26px] " />
                <span className="absolute top-0 right-0  w-4 h-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                  3
                </span>
              </a>
              {showNotification && (
                <div className="fixed top-16 right-4 z-50">
                  <Notification />
                </div>
              )}
            </li>

            {/* Profile Icon */}
            <li className="relative">
              <a
                href="#"
                onClick={() => toggleDropdown("profile")}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <img
                  src={profile}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block text-blue-700">K. Anderson</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
