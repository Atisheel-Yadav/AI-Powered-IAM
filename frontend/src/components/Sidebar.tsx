import { Link, useLocation } from "react-router-dom";
import { Home, Shield, BarChart3, CheckCircle } from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/", icon: Home },
  { name: "Request Access", path: "/request", icon: Shield },
  { name: "Approvals", path: "/approvals", icon: CheckCircle },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-4">
      <h1 className="text-white text-xl font-bold mb-8">
        🔐 IAM System
      </h1>

      <div className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all
              ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-white/10"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}