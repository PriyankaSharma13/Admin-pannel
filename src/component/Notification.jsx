import React, { useState } from "react";
import icon1 from "../assets/img/messages-1.jpg";
import icon2 from "../assets/img/messages-2.jpg";
import icon3 from "../assets/img/messages-3.jpg";
import { IoClose } from "react-icons/io5";


function Notification() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };


  return (
    isVisible && (
      <div className="w-[300px] bg-white shadow-lg rounded-lg p-4 m-4 border-l-4 border-[#FA8072]">
        <h3 className="text-lg font-semibold text-[#012970] mb-4">
          Notifications
        </h3>

        <ul className="space-y-4">
          <li className="flex items-start text-sm text-gray-700">
            <span className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <img
                src={icon1}
                alt="notification icon"
                className="h-8 w-8 rounded-full object-cover"
              />
            </span>
            <p className="ml-3">You have a new message</p>
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <span className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <img
                src={icon2}
                alt="notification icon"
                className="h-8 w-8 rounded-full object-cover"
              />
            </span>
            <p className="ml-3">Your profile was updated</p>
          </li>
          <li className="flex items-start text-sm text-gray-700">
            <span className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <img
                src={icon3}
                alt="notification icon"
                className="h-8 w-8 rounded-full object-cover"
              />
            </span>
            <p className="ml-3">Server status: All systems operational</p>
          </li>
        </ul>

        <div className="flex justify-end mt-4">
          <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
            <IoClose className="w-6 h-6" />
          </button>
        </div>
      </div>
    )
  );
}

export default Notification;
