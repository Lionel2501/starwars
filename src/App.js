import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../src/route";
import { useTranslation } from 'react-i18next';
import Navbar from '../src/components/Navbar';

function App() {
  const [activeLink, setActiveLink] = useState("/");

  const handleNavClick = (path) => {
    setActiveLink(path);
  };

  const { t, i18n } = useTranslation();

  return (
    <Router>
      <Navbar />

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

