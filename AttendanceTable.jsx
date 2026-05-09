const AttendanceTable = () => {
  const students = [
    ["Rahul", "92%", "Present"],
    ["Priya", "88%", "Present"],
    ["Arjun", "95%", "Present"],
    ["Sneha", "76%", "Absent"],
  ];

  return (
    <div
      style={{
        background: "#0d1735",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <h2>Student Attendance</h2>

      <table style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s[0]}</td>
              <td>{s[1]}</td>
              <td>{s[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;