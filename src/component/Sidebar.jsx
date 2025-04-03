import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard, RxComponent1 } from "react-icons/rx";
import { FaWpforms, FaTable } from "react-icons/fa";
import {
  IoStatsChartSharp,
  IoPersonSharp,
  IoLogInOutline,
  IoChevronDown,
} from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { GoNote } from "react-icons/go";

const Sidebar = ({ isSidebarOpen }) => {
  const [active, setActive] = useState(null);

  const toggleCollapse = (id) => {
    setActive(active === id ? null : id);
  };
  return (
    <aside
      className={`custom-sidebar h-full p-4 space-y-6 fixed top-0 left-0 bg-white text-white z-50 transition-transform transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <ul className="sidebar-nav space-y-4">
        <li className="nav-item">
          <Link
            className="custom-nav-link text-gray-300  flex items-center space-x-2"
            to="/"
          >
            <RxDashboard />
            <span className="ml-2">Dashboard</span>
          </Link>
        </li>

        {/* ------ Components Nav ------ */}
        <li className="nav-item">
          <Link
            className="custom-nav-link text-gray-300  flex items-center"
            onClick={() => toggleCollapse("components-nav")}
            to="#"
          >
            <RxComponent1 />
            <span className="ml-2">Components</span>

            <IoChevronDown
              className={`ml-auto transition-transform ${
                active === "components-nav" ? "rotate-180" : ""
              }`}
            />
          </Link>

          <ul
            id="components-nav"
            className={`nav-content ${
              active === "components-nav" ? "block" : "hidden"
            } ml-4`}
          >
            
            <li>
              <Link
                 to="/tableSection"
                className="block px-4 py-2 hover:bg-white"
              >
                <span>Tables</span>
                
              </Link>
            </li>
            <li>
              <Link
               to="/chartSection"
                className="block px-4 py-2 hover:bg-white"
              >
                <span>Charts</span>
                
              </Link>
            </li>
            
          </ul>
        </li>

 

        {/* Pages Nav */}
        <li className="custom-nav-heading text-[#3e74f0] text-sm mt-6">Pages</li>
        <li className="nav-item">
          <Link
            className="custom-nav-link text-gray-300 hover:text-[#3e74f0] flex items-center space-x-2"
            to="users-profile.html"
          >
            <IoPersonSharp />
            <span>Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="custom-nav-link text-gray-300 hover:text-[#3e74f0] flex items-center space-x-2"
            to="users-profile.html"
          >
            <GoNote />
            <span>Register</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="custom-nav-link text-gray-300 hover:text-[#3e74f0] flex items-center space-x-2"
            to="users-profile.html"
          >
            <TfiEmail />
            <span>Contact</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="custom-nav-link text-gray-300 hover:text-[#3e74f0] flex items-center space-x-2"
            to="users-profile.html"
          >
            <IoLogInOutline />
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
