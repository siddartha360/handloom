import { FiBox, FiShoppingCart, FiUsers, FiDollarSign } from "react-icons/fi";

export default function StatsCards() {
  const stats = [
    { label: "Total Products", value: 120, icon: <FiBox />, color: "bg-blue-500" },
    { label: "Total Orders", value: 350, icon: <FiShoppingCart />, color: "bg-green-500" },
    { label: "Total Users", value: 85, icon: <FiUsers />, color: "bg-purple-500" },
    { label: "Revenue", value: "₹2.5L", icon: <FiDollarSign />, color: "bg-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, idx) => (
        <div key={idx} className={`${item.color} text-white p-6 rounded-xl shadow-lg flex items-center justify-between`}>
          <div>
            <h3 className="text-2xl font-bold">{item.value}</h3>
            <p className="text-lg">{item.label}</p>
          </div>
          <div className="text-3xl">{item.icon}</div>
        </div>
      ))}
    </div>
  );
}
