export default function RecentActivity({ data }: any) {
  return (
    <div className="bg-white/5 p-4 rounded-2xl">
      <h2 className="text-white mb-3">Recent Activity</h2>

      <div className="space-y-2">
        {data.slice(0, 5).map((item: any) => (
          <div
            key={item.id}
            className="text-sm text-gray-300 border-b border-gray-700 pb-2"
          >
            <span className="text-white">{item.user_id}</span> →{" "}
            {item.resource} ({item.access_level})
          </div>
        ))}
      </div>
    </div>
  );
}