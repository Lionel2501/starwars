import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../src/route";
import { useTranslation } from 'react-i18next';

function App() {
  const [activeLink, setActiveLink] = useState("/");

  const handleNavClick = (path) => {
    setActiveLink(path);
  };

  const { t, i18n } = useTranslation();

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className={`navbar-brand ${activeLink === "/" ? "active" : ""}`}
            to="/"
            onClick={() => handleNavClick("/")}
          >
            Lionel Cassar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {routes.map((route) => (
                <li className="nav-item" key={route.path}>
                  <Link
                    className={`nav-link ${
                      activeLink === route.path ? "active" : ""
                    }`}
                    to={route.path}
                    onClick={() => handleNavClick(route.path)}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          {routes.map((route) => (
            <Route
              t={t}
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

