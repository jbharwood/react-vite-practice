import "./App.css";
import Home from "./components/searching/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StopLight from "./components/stoplight/StopLight";

export default function App() {
  return (
    <main className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stoplight" element={<StopLight />} />
        </Routes>
      </Router>
    </main>
  );
}
