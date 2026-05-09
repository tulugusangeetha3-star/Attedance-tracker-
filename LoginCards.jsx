const box = {
  background: "#0d1735",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "20px",
};

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "#111c44",
  border: "none",
  color: "white",
  borderRadius: "8px",
};

const button = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  background: "#4f7cff",
  border: "none",
  color: "white",
  borderRadius: "8px",
  cursor: "pointer",
};

const LoginCards = () => {
  return (
    <div>
      <div style={box}>
        <h2>Teacher Login</h2>
        <input style={input} placeholder="Email" />
        <input style={input} placeholder="Password" type="password" />
        <button style={button}>Login</button>
      </div>

      <div style={box}>
        <h2>Student Login</h2>
        <input style={input} placeholder="Roll Number" />
        <input style={input} placeholder="Password" type="password" />
        <button style={button}>Login</button>
      </div>

      <div style={box}>
        <h2>Parent Login</h2>
        <input style={input} placeholder="Email" />
        <input style={input} placeholder="Password" type="password" />
        <button style={button}>Login</button>
      </div>
    </div>
  );
};

export default LoginCards;

