import React from "react";

const TableSection = () => {
  return (
    <div className="ml-0 md:ml-[300px] p-4 mt-[45px]">
      <div className="overflow-x-auto space-y-8">
        {/* First Table */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-2">
          <h1 className="text-xl font-bold text-gray-800 mb-2">Simple Table</h1>
          <p className="text-gray-600 mb-4">
            Here is a subtitle for this table
          </p>
          <table className="min-w-full border-collapse border border-gray-200 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-200">#</th>
                <th className="px-4 py-2 border border-gray-200">Name</th>
                <th className="px-4 py-2 border border-gray-200">Email</th>
                <th className="px-4 py-2 border border-gray-200">Role</th>
                <th className="px-4 py-2 border border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">1</td>
                <td className="px-4 py-2 border border-gray-200">John Doe</td>
                <td className="px-4 py-2 border border-gray-200">
                  john@example.com
                </td>
                <td className="px-4 py-2 border border-gray-200">Admin</td>
                <td className="px-4 py-2 border border-gray-200">
                  <div className="flex justify-center space-x-4">
                    <button className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm transition duration-150 ease-in-out">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-sm transition duration-150 ease-in-out">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200">2</td>
                <td className="px-4 py-2 border border-gray-200">Jane Smith</td>
                <td className="px-4 py-2 border border-gray-200">
                  jane@example.com
                </td>
                <td className="px-4 py-2 border border-gray-200">User</td>
                <td className="px-4 py-2 border border-gray-200">
                  <div className="flex justify-center space-x-4">
                    <button className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm transition duration-150 ease-in-out">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-sm transition duration-150 ease-in-out">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Second Table */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-xl font-bold text-gray-800 mb-2">
            Regular Table with Colors
          </h1>
          <p className="text-gray-600 mb-4">
            Here is a subtitle for this table
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 text-left">
              <thead>
                <tr className="bg-[#FA8072]">
                  <th className="px-4 py-2 border border-gray-200">Id</th>
                  <th className="px-4 py-2 border border-gray-200">Name</th>
                  <th className="px-4 py-2 border border-gray-200">Salary</th>
                  <th className="px-4 py-2 border border-gray-200">Country</th>
                  <th className="px-4 py-2 border border-gray-200">City</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200">1</td>
                  <td className="px-4 py-2 border border-gray-200">John Doe</td>
                  <td className="px-4 py-2 border border-gray-200">$5000</td>
                  <td className="px-4 py-2 border border-gray-200">USA</td>
                  <td className="px-4 py-2 border border-gray-200">New York</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200">2</td>
                  <td className="px-4 py-2 border border-gray-200">
                    Jane Smith
                  </td>
                  <td className="px-4 py-2 border border-gray-200">$4500</td>
                  <td className="px-4 py-2 border border-gray-200">Canada</td>
                  <td className="px-4 py-2 border border-gray-200">Toronto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSection;
