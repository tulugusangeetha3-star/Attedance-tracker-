import Sidebar from "../components/Sidebar";
import TopCards from "../components/TopCards";
import LoginCards from "../components/LoginCards";
import ScannerCard from "../components/ScannerCard";
import AttendanceTable from "../components/AttendanceTable";
import AlertsCard from "../components/AlertsCard";
import QuickActions from "../components/QuickActions";

const DashboardLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#050816",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>
          AI Attendance Tracker Dashboard
        </h1>

        <TopCards />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <LoginCards />
          <ScannerCard />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <AttendanceTable />
          <AlertsCard />
        </div>

        <QuickActions />
      </div>
    </div>
  );
};

export default DashboardLayout;