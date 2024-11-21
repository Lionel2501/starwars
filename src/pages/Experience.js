import React from "react";
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Experience() {
  return (
    <Container>
      <h1>Expérience</h1>
      <Box 
        className="container"
        sx={{ 
          flexGrow: 1, 
          marginTop: 5, 
          borderColor: '#d3d3d3', 
          border: 1, 
          borderRadius: 2, 
          backgroundColor: "#f8f9fa" 
        }}>
        <Grid container spacing={3} sx={{ margin: 3}}>
          <Grid size="grow">
            Wippie
          </Grid>
          <Grid size="grow">
            Septembre 2023 - Octobre 2024
          </Grid>
          <Grid size={6}>
            hello
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: 5, borderColor: '#d3d3d3', border: 1, borderRadius: 2 }}>
        <Grid container spacing={3} sx={{ margin: 3}}>
          <Grid size="grow">
            Grupo Agni
          </Grid>
          <Grid size="grow">
            Septembre 2021 - Août 2023
          </Grid>
          <Grid size={6}>
            hello
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: 5, borderColor: '#d3d3d3', border: 1, borderRadius: 2 }}>
        <Grid container spacing={3} sx={{ margin: 3}}>
          <Grid size="grow">
            Arte y Parte
          </Grid>
          <Grid size="grow">
            Juin 2021 - Janvier 2022
          </Grid>
          <Grid size={8}>
            <div>
              Responsable de l'implémentation du contenu de la section des cours pour le site
            </div>
            <ul>
              <li>Contribué à la conception, au développement et à la maintenance d'une plateforme de cours en ligne, garantissant une expérience utilisateur fluide et accessible pour les étudiants.</li>
              <li>Contribué à la conception, au développement et à la maintenance d'une plateforme de cours en ligne, garantissant une expérience utilisateur fluide et accessible pour les étudiants.</li>
              <li>Contribué à la conception, au développement et à la maintenance d'une plateforme de cours en ligne, garantissant une expérience utilisateur fluide et accessible pour les étudiants.</li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Experience;