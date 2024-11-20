import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaCity, FaEnvelope, FaDownload, FaUser } from "react-icons/fa";
import { Container, Typography, Box, Button } from "@mui/material";
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t, i18n } = useTranslation();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/cv_lionel_cassar_programador.pdf'; // Ruta pública al archivo
    link.download = 'lionel_cassar_cv.pdf';  // Nombre con el que se descargará
    link.click();
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {t("contact.title")}
      </Typography>
      
      {/* Informations de contact avec icônes */}
      <Box className="contact-info" mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <FaUser style={{ fontSize: "24px", marginRight: "10px" }} />
          <Typography variant="body1" color="textPrimary">Lionel Cassar</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <FaCity style={{ fontSize: "24px", marginRight: "10px" }} />
          <Typography variant="body1" color="textPrimary">Tandil, Buenos Aires (GMT -3)</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <FaPhone style={{ fontSize: "24px", marginRight: "10px" }} />
          <Typography variant="body1" color="textPrimary">0054 2494 646 055</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <FaEnvelope style={{ fontSize: "24px", marginRight: "10px" }} />
          <Typography variant="body1" color="textPrimary">lionelcassar92@gmail.com</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <a href="https://www.linkedin.com/in/lionelcassar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: "24px", marginRight: "10px" }} />
          </a>
          <Typography variant="body1" color="textPrimary">
            <a href="https://www.linkedin.com/in/lionelcassar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <a href="https://github.com/Lionel2501" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: "24px", marginRight: "10px" }} />
          </a>
          <Typography variant="body1" color="textPrimary">
            <a href="https://github.com/Lionel2501" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={2}>
          <FaDownload style={{ fontSize: "24px", marginRight: "10px" }} />
          <Button variant="contained" color="primary" onClick={handleDownload}>
            {t("contact.download")}
          </Button>
        </Box>
      </Box>

      {/* Formulaire de Contact */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "2rem",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          {t("contact.formTitle")}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" color="textPrimary">Nom</Typography>
          <input type="text" className="form-control" required />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" color="textPrimary">Email</Typography>
          <input type="email" className="form-control" required />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body1" color="textPrimary">Message</Typography>
          <textarea className="form-control" rows="4" required></textarea>
        </Box>
        <Button variant="contained" color="primary" type="submit" sx={{ alignSelf: "flex-start" }}>
          {t("contact.submit")}
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
