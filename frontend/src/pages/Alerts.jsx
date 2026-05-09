import Sidebar from "../components/Sidebar";

export default function Alerts() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="box">

          <h2>Automatic Alerts</h2>

          <div className="alert">
            Email sent to Priya's parent
          </div>

          <div className="alert">
            SMS sent to Rahul
          </div>

          <div className="alert">
            Alert sent to Sneha's parent
          </div>

        </div>

      </div>

    </div>
  );
}