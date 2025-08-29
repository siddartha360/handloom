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

// Dummy chart data
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
      {/* Header */}
      <div className="mb-10 border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-2">Overview of your store performance</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          title="Total Products"
          value="120"
          icon={<FiBox />}
          color="indigo"
        />
        <StatCard
          title="Total Orders"
          value="350"
          icon={<FiShoppingCart />}
          color="green"
        />
        <StatCard
          title="Total Users"
          value="85"
          icon={<FiUsers />}
          color="purple"
        />
        <StatCard
          title="Revenue"
          value="₹2.5L"
          icon={<FiDollarSign />}
          color="yellow"
        />
      </div>

      {/* Chart + Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            📈 Monthly Revenue
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
        <div className="bg-white rounded-3xl p-6 border shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            🧾 Recent Orders
          </h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50 text-gray-700">
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <OrderRow id="#1234" customer="Rahul" status="Pending" color="yellow" amount="₹1200" />
              <OrderRow id="#1235" customer="Priya" status="Shipped" color="blue" amount="₹2500" />
              <OrderRow id="#1236" customer="Amit" status="Delivered" color="green" amount="₹700" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 🔹 Reusable Stat Card
function StatCard({ title, value, icon, color }) {
  return (
    <div
      className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex items-center justify-between`}
    >
      <div>
        <h4 className="text-sm text-gray-500">{title}</h4>
        <p
          className={`text-4xl font-extrabold text-${color}-600 tracking-tight`}
        >
          {value}
        </p>
      </div>
      <div className={`text-5xl text-${color}-500 drop-shadow-md`}>
        {icon}
      </div>
    </div>
  );
}

// 🔹 Reusable Order Row
function OrderRow({ id, customer, status, color, amount }) {
  return (
    <tr className="border-b hover:bg-indigo-50 transition">
      <td className="p-3">{id}</td>
      <td className="p-3">{customer}</td>
      <td className="p-3">
        <span
          className={`bg-${color}-100 text-${color}-800 px-3 py-1 rounded-full text-xs font-medium`}
        >
          {status}
        </span>
      </td>
      <td className="p-3 font-semibold">{amount}</td>
    </tr>
  );
}

export default AdminDashboard;
