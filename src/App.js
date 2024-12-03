import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "../src/route";
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Home from '../src/pages/Home';
import Experience from '../src/pages/Experience';
import Contact from '../src/pages/Contact';
import Demo from '../src/pages/Demo';

function App() {

  return (
    <Router>
      {/* <Navbar /> */}
      <Home />
      <Experience />
      <Demo />
      <Contact />
      {/* <div className="container mt-4" style={{ minHeight: '80vh' }} >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div> */}
      <Footer /> 
    </Router>
  );
}

export default App;

