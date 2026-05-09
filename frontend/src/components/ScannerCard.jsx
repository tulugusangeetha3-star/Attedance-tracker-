const ScannerCard = () => {
  return (
    <div
      style={{
        background: "#0d1735",
        borderRadius: "15px",
        padding: "20px",
      }}
    >
      <h2>AI Face Attendance Scanner</h2>

      <div
        style={{
          border: "2px dashed #555",
          borderRadius: "12px",
          padding: "80px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Upload Class Photo Here
      </div>

      <button
        style={{
          marginTop: "20px",
          padding: "14px 30px",
          background: "green",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Scan Attendance
      </button>
    </div>
  );
};

export default ScannerCard;