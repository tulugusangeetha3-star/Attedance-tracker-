const Sidebar = () => {
  const menu = [
    "Dashboard",
    "Student Login",
    "Teacher Login",
    "Parent Login",
    "Attendance Dashboard",
    "Marks Dashboard",
    "Fingerprint Attendance",
    "Face Scan Attendance",
    "College Location Tracking",
    "Parent Alert System",
    "AI Face Recognition",
    "Admin Dashboard",
    "Student Reports",
  ];

  return (
    <div
      style={{
        width: "260px",
        background: "#081028",
        padding: "20px",
        borderRight: "1px solid #1b2a52",
      }}
    >
      <h2 style={{ color: "#4da3ff" }}>AI Attendance Tracker</h2>

      <div style={{ marginTop: "30px" }}>
        {menu.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "14px",
              marginBottom: "10px",
              background: "#0d1735",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;