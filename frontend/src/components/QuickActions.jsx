const button = {
  padding: "15px 25px",
  background: "#111c44",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const QuickActions = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        background: "#0d1735",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <h2>Quick Actions</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <button style={button}>Add Student</button>
        <button style={button}>Add Marks</button>
        <button style={button}>Generate Report</button>
        <button style={button}>Send Alert</button>
      </div>
    </div>
  );
};

export default QuickActions;