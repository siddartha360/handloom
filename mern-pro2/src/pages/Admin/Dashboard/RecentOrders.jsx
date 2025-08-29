const orders = [
  { id: "#1234", customer: "Rahul", status: "Pending", amount: "₹1200" },
  { id: "#1235", customer: "Priya", status: "Shipped", amount: "₹2500" },
  { id: "#1236", customer: "Amit", status: "Delivered", amount: "₹700" },
];

export default function RecentOrders() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : order.status === "Shipped"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-3 font-semibold">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
