import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#22c55e", "#eab308", "#ef4444"];

export default function RiskChart({ data }: any) {
  const chartData = [
    { name: "Low", value: data.filter((d: any) => d.risk_score < 0.3).length },
    { name: "Medium", value: data.filter((d: any) => d.risk_score >= 0.3 && d.risk_score < 0.7).length },
    { name: "High", value: data.filter((d: any) => d.risk_score >= 0.7).length },
  ];

  return (
    <div className="bg-white/5 p-4 rounded-2xl">
      <h2 className="text-white mb-2">Risk Distribution</h2>

      <PieChart width={250} height={200}>
        <Pie data={chartData} dataKey="value" outerRadius={80}>
          {chartData.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}