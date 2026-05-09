function Students() {
  return (
    <div>
      <h1>Students Page</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>92%</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Priya</td>
            <td>88%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Students;