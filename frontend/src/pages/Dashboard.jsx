function Dashboard() {
  return (
    <div>
      <h1>AI Attendance Tracker Dashboard</h1>

      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '20px'
      }}>

        <div style={{
          padding: '20px',
          background: '#2563eb',
          color: 'white',
          borderRadius: '10px'
        }}>
          <h2>Total Students</h2>
          <h1>120</h1>
        </div>

        <div style={{
          padding: '20px',
          background: '#16a34a',
          color: 'white',
          borderRadius: '10px'
        }}>
          <h2>Present Today</h2>
          <h1>105</h1>
        </div>

        <div style={{
          padding: '20px',
          background: '#dc2626',
          color: 'white',
          borderRadius: '10px'
        }}>
          <h2>Absent Today</h2>
          <h1>15</h1>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;