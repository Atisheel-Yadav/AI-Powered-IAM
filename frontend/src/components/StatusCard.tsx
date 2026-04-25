import { motion } from "framer-motion";

export default function StatusCard({ title, count, color }: any) {
  return (
    <motion.div
      className={`p-6 rounded-2xl text-white ${color} shadow-xl`}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-sm opacity-70">{title}</h3>
      <p className="text-2xl font-bold">{count}</p>
    </motion.div>
  );
}