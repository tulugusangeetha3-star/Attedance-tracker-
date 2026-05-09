import Sidebar from "../components/Sidebar";

export default function Marks() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="box">

          <h2>Student Marks</h2>

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

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}