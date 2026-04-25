import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import RequestAccess from "./pages/RequestAccess";
import Analytics from "./pages/Analytics";
import Approvals from "./pages/Approvals";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/request" element={<RequestAccess />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/approvals" element={<Approvals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}