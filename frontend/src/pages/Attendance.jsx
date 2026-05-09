import Sidebar from "../components/Sidebar";

export default function Attendance() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="box">

          <h2>AI Face Attendance</h2>

          <input type="file" />

          <br />
          <br />

          <button>
            Scan Attendance
          </button>

        </div>

      </div>

    </div>
  );
}