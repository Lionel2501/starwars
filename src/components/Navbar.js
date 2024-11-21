import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


function Navbar() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/cv_lionel_cassar_programador.pdf'; // Ruta pública al archivo
    link.download = 'lionel_cassar_cv.pdf';  // Nombre con el que se descargará
    link.click();
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light mb-10"
      style={{ "backgroundColor": "#6c757d"}}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
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
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/experience">
              Expérience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/technologies">
                Technologies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/demo">
                Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Button size="small" variant="contained" color="primary" onClick={handleDownload}>
                Résumé
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
