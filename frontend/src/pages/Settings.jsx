import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="box">

          <h2>Settings</h2>

          <button>
            Dark Mode
          </button>

          <br />
          <br />

          <button>
            Notifications
          </button>

        </div>

      </div>

    </div>
  );
}