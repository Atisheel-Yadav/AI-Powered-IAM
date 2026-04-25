export default function StatsPanel({ data }: any) {
  const total = data.length;
  const avgRisk =
    total > 0
      ? (data.reduce((a: number, b: any) => a + b.risk_score, 0) / total).toFixed(2)
      : 0;

  return (
    <div className="bg-white/5 p-4 rounded-2xl text-white">
      <h2 className="mb-2">Quick Stats</h2>
      <p>Total Requests: {total}</p>
      <p>Avg Risk Score: {avgRisk}</p>
    </div>
  );
}