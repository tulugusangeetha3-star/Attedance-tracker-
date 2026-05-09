import Sidebar from "../components/Sidebar";

export default function Reports() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="box">

          <h2>Reports</h2>

          <button>
            Download Attendance Report
          </button>

          <br />
          <br />

          <button>
            Download Marks Report
          </button>

        </div>

      </div>

    </div>
  );
}