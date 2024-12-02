import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaCity, FaEnvelope, FaUser } from "react-icons/fa";
import { Container, Typography, Box, Button } from "@mui/material";
import Grid from '@mui/material/Grid';

const Contact = () => {

  return (
    <Container maxWidth="lg" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Box sx={{ flexGrow: 1 }}>
      <h1>Contact</h1>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={7}>
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
          </Grid>
          <Grid item xs={5}>
            <Box
              style={{
                backgroundColor: "#f9f9f9",
                padding: "20px",
                marginBottom: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <Typography variant="h4" component="h1" align="center" gutterBottom>
                Contact
              </Typography>
              <Box
                className="contact-info"
                mb={4}
                style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
              >
                  <Box display="flex" alignItems="center" mb={2}>
                    <FaUser style={{ fontSize: "24px", marginRight: "10px", color: "#007bff" }} />
                    <Typography variant="body1" color="textPrimary">
                      Lionel Cassar
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <FaCity style={{ fontSize: "24px", marginRight: "10px", color: "#007bff" }} />
                    <Typography variant="body1" color="textPrimary">
                      Montargis, Loiret
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <FaPhone style={{ fontSize: "24px", marginRight: "10px", color: "#007bff" }} />
                    <Typography variant="body1" color="textPrimary">
                      06 23 26 08 12
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <FaEnvelope style={{ fontSize: "24px", marginRight: "10px", color: "#007bff" }} />
                    <Typography variant="body1" color="textPrimary">
                      lionelcassar92@gmail.com
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <a
                      href="https://www.linkedin.com/in/lionelcassar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaLinkedin
                        style={{
                          fontSize: "24px",
                          marginRight: "10px",
                          color: "#007bff",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                        onMouseLeave={(e) => (e.target.style.color = "#007bff")}
                      />
                      <Typography variant="body1" color="textPrimary">
                        LinkedIn
                      </Typography>
                    </a>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <a
                      href="https://github.com/Lionel2501"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <FaGithub
                        style={{
                          fontSize: "24px",
                          marginRight: "10px",
                          color: "#007bff",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                        onMouseLeave={(e) => (e.target.style.color = "#007bff")}
                      />
                      <Typography variant="body1" color="textPrimary">
                        GitHub
                      </Typography>
                    </a>
                  </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
