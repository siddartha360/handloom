import StatsCards from "./StatsCards";
import SalesChart from "./SalesChart";
import RecentOrders from "./RecentOrders";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <StatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}
