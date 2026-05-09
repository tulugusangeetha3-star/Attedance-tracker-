import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";
import Scanner from "../components/ScannerCard";
import LoginCards from "../components/LoginCards";
import AttendanceTable from "../components/AttendanceTable";
import DashboardLayout from "../layouts/DashboardLayout";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard">
        <Sidebar />

        <div className="dashboard-content">
          <TopCards />
          <Scanner />
          <LoginCards />
          <AttendanceTable />
        </div>
      </div>
    </DashboardLayout>
  );
}