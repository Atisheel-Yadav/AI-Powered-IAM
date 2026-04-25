export default function RequestTable({ data }: any) {
  return (
    <div className="mt-6 bg-white/5 backdrop-blur-xl p-4 rounded-2xl">
      <h2 className="text-white mb-4">Request History</h2>

      <table className="w-full text-white text-sm">
        <thead>
          <tr className="text-gray-400">
            <th>User</th>
            <th>Resource</th>
            <th>Access</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: any) => (
            <tr key={item.id} className="text-center border-t border-gray-700">
              <td>{item.user_id}</td>
              <td>{item.resource}</td>
              <td>{item.access_level}</td>
              <td
                className={`${
                  item.status === "approved"
                    ? "text-green-400"
                    : item.status === "denied"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}