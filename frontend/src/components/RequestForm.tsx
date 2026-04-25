import { useState } from "react";
import { requestAccess } from "../services/api";
import { motion } from "framer-motion";

export default function RequestForm() {
  const [form, setForm] = useState({
    user_id: "",
    resource: "",
    access_level: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await requestAccess(form);
      alert(JSON.stringify(res.data, null, 2));
    } catch (err) {
      alert("Error submitting request");
    }
    setLoading(false);
  };

  return (
    <motion.div
      className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-lg"
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <h2 className="text-white text-2xl font-semibold mb-6 text-center">
        🔐 Request Access
      </h2>

      {/* Inputs */}
      <div className="space-y-5">
        {Object.keys(form).map((key) => {
          const value = form[key as keyof typeof form];

          return (
            <div key={key} className="relative">
              <input
                required
                value={value}
                onChange={(e) =>
                  setForm({ ...form, [key]: e.target.value })
                }
                placeholder=" "
                className="peer w-full p-3 pt-5 rounded-xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Floating Label */}
              <label
                className={`absolute left-3 transition-all duration-300 
                ${
                  value
                    ? "-top-2 text-xs text-blue-400 bg-black px-1 rounded"
                    : "top-3 text-sm text-gray-400"
                }`}
              >
                {key.replace("_", " ").toUpperCase()}
              </label>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <motion.button
        onClick={handleSubmit}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 w-full p-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all"
      >
        {loading ? "Processing..." : "Submit Request"}
      </motion.button>
    </motion.div>
  );
}