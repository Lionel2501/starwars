import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../src/route";
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

function App() {

  return (
    <Router>
      <Navbar />

      <div className="container mt-4" style={{ minHeight: '80vh' }} >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;

