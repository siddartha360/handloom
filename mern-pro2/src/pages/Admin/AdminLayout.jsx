import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FiBox,
  FiUsers,
  FiShoppingCart,
  FiSettings,
  FiLogOut,
  FiHome,
  FiBarChart2,
  FiMenu,
} from "react-icons/fi";

export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-purple-800 via-purple-900 to-indigo-900 text-white shadow-xl p-4 flex flex-col transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-8">
          <h1
            className={`text-2xl font-extrabold tracking-wide transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl hover:text-yellow-400 transition"
            title="Toggle Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col gap-4 text-lg font-medium">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700 hover:text-yellow-300 transition"
          >
            <FiBarChart2 className="text-xl" /> {isOpen && "Dashboard"}
          </Link>

          <Link
            to="/admin/products"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700 hover:text-yellow-300 transition"
          >
            <FiBox className="text-xl" /> {isOpen && "Products"}
          </Link>

          <Link
            to="/admin/orders"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700 hover:text-yellow-300 transition"
          >
            <FiShoppingCart className="text-xl" /> {isOpen && "Orders"}
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700 hover:text-yellow-300 transition"
          >
            <FiUsers className="text-xl" /> {isOpen && "Users"}
          </Link>

          <Link
            to="/admin/settings"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700 hover:text-yellow-300 transition"
          >
            <FiSettings className="text-xl" /> {isOpen && "Settings"}
          </Link>

          <Link
            to="/"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-700 hover:text-yellow-300 transition"
          >
            <FiHome className="text-xl" /> {isOpen && "Back to Store"}
          </Link>
        </nav>

        {/* Logout Button */}
        <button className="mt-auto flex items-center gap-3 bg-red-600 px-3 py-2 rounded-lg hover:bg-red-700 transition">
          <FiLogOut className="text-xl" /> {isOpen && "Logout"}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 overflow-y-auto">
        {/* Content Wrapper */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
