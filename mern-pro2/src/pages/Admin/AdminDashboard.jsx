import React from "react";
import {
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy data for chart
const salesData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 9000 },
  { month: "Apr", revenue: 12000 },
  { month: "May", revenue: 15000 },
  { month: "Jun", revenue: 18000 },
];

function AdminDashboard() {
  return (
    <div className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
          Admin Dashboard
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Total Products */}
        <div className="bg-white hover:shadow-xl transition rounded-2xl p-6 flex items-center justify-between border border-gray-100 shadow-md">
          <div>
            <h3 className="text-sm text-gray-500">Total Products</h3>
            <p className="text-4xl font-bold text-indigo-600">120</p>
          </div>
          <FiBox className="text-5xl text-indigo-500" />
        </div>

        {/* Total Orders */}
        <div className="bg-white hover:shadow-xl transition rounded-2xl p-6 flex items-center justify-between border border-gray-100 shadow-md">
          <div>
            <h3 className="text-sm text-gray-500">Total Orders</h3>
            <p className="text-4xl font-bold text-green-600">350</p>
          </div>
          <FiShoppingCart className="text-5xl text-green-500" />
        </div>

        {/* Total Users */}
        <div className="bg-white hover:shadow-xl transition rounded-2xl p-6 flex items-center justify-between border border-gray-100 shadow-md">
          <div>
            <h3 className="text-sm text-gray-500">Total Users</h3>
            <p className="text-4xl font-bold text-purple-600">85</p>
          </div>
          <FiUsers className="text-5xl text-purple-500" />
        </div>

        {/* Revenue */}
        <div className="bg-white hover:shadow-xl transition rounded-2xl p-6 flex items-center justify-between border border-gray-100 shadow-md">
          <div>
            <h3 className="text-sm text-gray-500">Revenue</h3>
            <p className="text-4xl font-bold text-yellow-600">₹2.5L</p>
          </div>
          <FiDollarSign className="text-5xl text-yellow-500" />
        </div>
      </div>

      {/* Sales Chart + Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Monthly Revenue
          </h2>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 5, stroke: "#6366f1", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recent Orders
          </h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-indigo-50 text-gray-700">
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-indigo-50 transition">
                <td className="p-3">#1234</td>
                <td className="p-3">Rahul</td>
                <td className="p-3">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">
                    Pending
                  </span>
                </td>
                <td className="p-3 font-semibold">₹1200</td>
              </tr>
              <tr className="border-b hover:bg-indigo-50 transition">
                <td className="p-3">#1235</td>
                <td className="p-3">Priya</td>
                <td className="p-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                    Shipped
                  </span>
                </td>
                <td className="p-3 font-semibold">₹2500</td>
              </tr>
              <tr className="hover:bg-indigo-50 transition">
                <td className="p-3">#1236</td>
                <td className="p-3">Amit</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                    Delivered
                  </span>
                </td>
                <td className="p-3 font-semibold">₹700</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
