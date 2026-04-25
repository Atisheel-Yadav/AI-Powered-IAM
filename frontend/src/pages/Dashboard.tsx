import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import { fetchRequests } from "../services/api";
import RiskChart from "../components/RiskChart";
import RecentActivity from "../components/RecentActivity";
import StatsPanel from "../components/StatsPanel";

export default function Dashboard() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetchRequests();
    setData(res.data);
  };

  const approved = data.filter((d) => d.status === "approved").length;
  const pending = data.filter((d) => d.status === "pending_approval").length;
  const denied = data.filter((d) => d.status === "denied").length;

  return (
    <div>
      <h1 className="text-white text-3xl mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatusCard title="Approved" count={approved} color="bg-green-600" />
        <StatusCard title="Pending" count={pending} color="bg-yellow-500" />
        <StatusCard title="Denied" count={denied} color="bg-red-600" />
      </div>

      {/* Charts + Activity */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <RiskChart data={data} />
        <RecentActivity data={data} />
      </div>

      {/* Stats */}
      <StatsPanel data={data} />
    </div>
  );
}