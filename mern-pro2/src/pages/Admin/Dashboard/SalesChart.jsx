import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 9000 },
  { month: "Apr", revenue: 12000 },
  { month: "May", revenue: 15000 },
];

export default function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
