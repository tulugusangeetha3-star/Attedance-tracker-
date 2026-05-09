const AlertsCard = () => {
  return (
    <div
      style={{
        background: "#0d1735",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <h2>Automatic Alerts</h2>

      <div style={{ marginTop: "20px" }}>
        <p>Email sent to Priya's parent</p>
        <p>SMS sent to Rahul</p>
        <p>Low marks alert sent</p>
      </div>
    </div>
  );
};

export default AlertsCard;