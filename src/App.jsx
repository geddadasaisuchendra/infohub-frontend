import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Weather from "./components/Weather";
import Converter from "./components/Converter";
import Quotes from "./components/Quotes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="container">

        {/* header */}
        <header className="brand">
          <span className="logo">🌐</span> <strong>INFOHUB</strong>
         </header>
         
        {/* Main content centered */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </main>

        {/* Navigation bar fixed at bottom center */}
        <nav className="bottom-nav">
          <NavLink to="/weather" className="nav-item">Weather</NavLink>
          <NavLink to="/converter" className="nav-item">Currency</NavLink>
          <NavLink to="/quotes" className="nav-item">Quotes</NavLink>
        </nav>

      </div>
    </Router>
  );
}
