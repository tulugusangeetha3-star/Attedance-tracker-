const cardStyle = {
  background: "#0d1735",
  padding: "20px",
  borderRadius: "15px",
  flex: 1,
};

const TopCards = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={cardStyle}>
        <h3>Total Students</h3>
        <h1>120</h1>
      </div>

      <div style={cardStyle}>
        <h3>Present Today</h3>
        <h1 style={{ color: "lightgreen" }}>105</h1>
      </div>

      <div style={cardStyle}>
        <h3>Absent Today</h3>
        <h1 style={{ color: "tomato" }}>15</h1>
      </div>
    </div>
  );
};

export default TopCards;
