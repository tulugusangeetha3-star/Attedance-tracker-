import { Link } from "react-router-dom";

export default function Sidebar() {
  return (

    <div className="sidebar">

      <div className="logo">
        AI Attendance Tracker
      </div>

      <div className="menu">

        <Link to="/">
          Dashboard
        </Link>

        <Link to="/attendance">
          Face Attendance
        </Link>

        <Link to="/students">
          Students
        </Link>

        <Link to="/marks">
          Marks & Performance
        </Link>

        <Link to="/alerts">
          Alerts
        </Link>

        <Link to="/reports">
          Reports
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/settings">
          Settings
        </Link>

      </div>

    </div>

  );
}