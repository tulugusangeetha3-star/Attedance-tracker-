import Sidebar from "../components/Sidebar";

export default function Students() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="box">

          <h2>Students List</h2>

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Rahul</td>
                <td>CSE</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Priya</td>
                <td>ECE</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}