import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        {/* TOP CARDS */}

        <div className="cards">

          <div className="card">
            <h2>Total Students</h2>
            <p className="blue">120</p>
          </div>

          <div className="card">
            <h2>Present Today</h2>
            <p className="green">105</p>
          </div>

          <div className="card">
            <h2>Absent Today</h2>
            <p className="red">15</p>
          </div>

        </div>

        {/* FACE SCANNER */}

        <div className="box">
          <h2>AI Face Attendance Scanner</h2>

          <input type="file" />

          <br />
          <br />

          <button>
            Scan Attendance
          </button>
        </div>

        {/* STUDENT TABLE */}

        <div className="box">

          <h2>Student Attendance</h2>

          <table>

            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Rahul</td>
                <td>92%</td>
                <td className="green">Present</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Priya</td>
                <td>88%</td>
                <td className="green">Present</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Arjun</td>
                <td>95%</td>
                <td className="green">Present</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Sneha</td>
                <td>76%</td>
                <td className="orange">Absent</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* MARKS */}

        <div className="box">

          <h2>Marks Scored</h2>

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Rahul</td>
                <td>Math</td>
                <td>85</td>
              </tr>

              <tr>
                <td>Priya</td>
                <td>Science</td>
                <td>78</td>
              </tr>

              <tr>
                <td>Arjun</td>
                <td>English</td>
                <td>92</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* ALERTS */}

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

        {/* QUICK ACTIONS */}

        <div className="box">

          <h2>Quick Actions</h2>

          <div className="actions">

            <div className="action-btn">
              Add Student
            </div>

            <div className="action-btn">
              Add Marks
            </div>

            <div className="action-btn">
              Send Alert
            </div>

            <div className="action-btn">
              Generate Report
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}