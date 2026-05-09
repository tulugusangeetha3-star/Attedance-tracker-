import { Routes, Route } from "react-router-dom";

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

function Students() {
  return <h1>Students Page</h1>;
}

function Alerts() {
  return <h1>Alerts Page</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/alerts" element={<Alerts />} />
    </Routes>
  );
}