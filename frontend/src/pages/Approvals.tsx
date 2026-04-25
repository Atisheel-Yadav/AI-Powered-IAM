import { useEffect, useState } from "react";
import { fetchRequests, approveRequest } from "../services/api";
import { motion } from "framer-motion";

export default function Approvals() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetchRequests();
    const pending = res.data.filter(
      (d: any) => d.status === "pending_approval"
    );
    setData(pending);
  };

  const handleDecision = async (user_id: string, decision: string) => {
    setLoading(true);
    await approveRequest({ user_id, decision, source: "dashboard" });
    await loadData();
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-white text-2xl mb-6">
        👨‍💼 Pending Approvals
      </h1>

      {/* 🔥 CASE 1: No Pending Requests */}
      {data.length === 0 && (
        <motion.div
          className="flex flex-col items-center justify-center mt-20 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-6xl mb-4">✅</div>
          <p className="text-lg font-medium">
            No pending requests available
          </p>
          <p className="text-sm text-gray-500">
            You're all caught up 🎉
          </p>
        </motion.div>
      )}

      {/* 🔥 CASE 2: Show Requests */}
      <div className="space-y-4">
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white/5 p-4 rounded-xl flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <p className="text-white font-medium">
                {item.user_id}
              </p>
              <p className="text-gray-400 text-sm">
                {item.resource} ({item.access_level})
              </p>
            </div>

            <div className="flex gap-2">
              <button
                disabled={loading}
                onClick={() =>
                  handleDecision(item.user_id, "approve")
                }
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                Approve
              </button>

              <button
                disabled={loading}
                onClick={() =>
                  handleDecision(item.user_id, "deny")
                }
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
              >
                Deny
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}