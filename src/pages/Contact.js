import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaCity, FaEnvelope, FaUser } from "react-icons/fa";
import { Container, Typography, Box, Button, Card } from "@mui/material";

const Contact = () => {

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <h1>Contact</h1>

      <Card style={{ "backgroundColor": "#f8f9fa", "padding":"20px", "margin-bottom": "20px"}}> 
        <Box className="contact-info" mb={4} style={{ "display": "flex", "justify-content": "space-between" }}>
          <div>
            <Box display="flex" alignItems="center" mb={2}>
              <FaUser style={{ fontSize: "24px", marginRight: "10px" }} />
              <Typography variant="body1" color="textPrimary">Lionel Cassar</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <FaCity style={{ fontSize: "24px", marginRight: "10px" }} />
              <Typography variant="body1" color="textPrimary">Montargis, Loiret</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <FaPhone style={{ fontSize: "24px", marginRight: "10px" }} />
              <Typography variant="body1" color="textPrimary">06 23 26 08 12</Typography>
            </Box>
          </div>
          <div>
            <Box display="flex" alignItems="center" mb={2}>
              <FaEnvelope style={{ fontSize: "24px", marginRight: "10px" }} />
              <Typography variant="body1" color="textPrimary">lionelcassar92@gmail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <a href="https://www.linkedin.com/in/lionelcassar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <FaLinkedin style={{ fontSize: "24px", marginRight: "10px" }} />
              </a>
              <Typography variant="body1" color="textPrimary">
                <a href="https://www.linkedin.com/in/lionelcassar/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>LinkedIn</a>
              </Typography>
            </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <a href="https://github.com/Lionel2501" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <FaGithub style={{ fontSize: "24px", marginRight: "10px" }} />
            </a>
            <Typography variant="body1" color="textPrimary">
              <a href="https://github.com/Lionel2501" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>GitHub</a>
            </Typography>
          </Box>
          </div>
        </Box>
      </Card>

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
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Message
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
          Envoyer
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
