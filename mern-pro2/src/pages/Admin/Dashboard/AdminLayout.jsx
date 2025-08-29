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
    <div className="flex min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100 text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-purple-800 via-purple-900 to-indigo-900 text-white shadow-2xl p-4 flex flex-col transition-all duration-300 fixed h-full z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-10">
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
        <nav className="flex flex-col gap-4 text-[17px] font-medium">
          <NavItem to="/admin/dashboard" icon={<FiBarChart2 />} label="Dashboard" isOpen={isOpen} />
          <NavItem to="/admin/products" icon={<FiBox />} label="Products" isOpen={isOpen} />
          <NavItem to="/admin/orders" icon={<FiShoppingCart />} label="Orders" isOpen={isOpen} />
          <NavItem to="/admin/users" icon={<FiUsers />} label="Users" isOpen={isOpen} />
          <NavItem to="/admin/settings" icon={<FiSettings />} label="Settings" isOpen={isOpen} />
          <NavItem to="/" icon={<FiHome />} label="Back to Store" isOpen={isOpen} />
        </nav>

        {/* Logout Button */}
        <button className="mt-auto flex items-center gap-3 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md">
          <FiLogOut className="text-xl" /> {isOpen && "Logout"}
        </button>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 pl-${isOpen ? "64" : "20"} transition-all duration-300 ml-${
          isOpen ? "64" : "20"
        } p-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 min-h-screen`}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 min-h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function NavItem({ to, icon, label, isOpen }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-2 rounded-xl hover:bg-purple-700 hover:text-yellow-300 transition-all duration-200 group"
    >
      <span className="text-xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
      {isOpen && <span className="transition-all">{label}</span>}
    </Link>
  );
}
