import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="box">

          <h2>Profile</h2>

          <input type="text" placeholder="Name" />

          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button>
            Update Profile
          </button>

        </div>

      </div>

    </div>
  );
}
