import React from "react";
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


function Experience() {
  return (
    <Container sx={{ backgroundColor: "white"}}>
      <h1>Expérience</h1>
      <Box sx={{ flexGrow: 1, marginTop: 5, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: 2 }}>
        <Grid container spacing={3} sx={{ margin: 3, padding: 3 }}>
          <Grid size={12} styles={{     
            "display": "flex",
            // "justifyContent": "space-between"
          }}>
            <Typography variant="h4" component="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Développeur Full Stack
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
            @Wippie
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
            Septembre 2023 - Octobre 2024
            </Typography>
            {/* <div styles={{ width: "200px" }}>
              <img style={{ width: "150px" }} src="/files/wippie.png" />
            </div> */}
          </Grid>
          <Grid size={12}>
            <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px', flexFlow: 'start'}}>
            <Chip size='large' label="HTML" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
            <Chip size='large' label="CSS" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
            <Chip size='large' label="Bootstrap" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
            <Chip size='large' label="JQuery" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
            <Chip size='large' label="PHP" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
            <Chip size='large' label="Kumbia PHP" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
            <Chip size='large' label="MySql" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
            <Chip size='large' label="GitLab" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
            <Chip size='large' label="WinSCP" sx={{ '& .MuiChip-label': {fontSize: '20px', fontWeight: '600'}}}/>
          </Stack>
          </Grid>
          <Grid size={10}>
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
      <Box sx={{ flexGrow: 1, marginTop: 5, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: 2 }}>
        <Grid container spacing={3} sx={{ margin: 3, padding: 3 }}>
          <Grid size="grow" styles={{     
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between"
          }}>
            <p>Wippie</p>
            <p>Septembre 2023 - Octobre 2024</p>
            <div styles={{ width: "200px" }}>
              <img style={{ width: "150px" }} src="/files/wippie.png" />
            </div>
          </Grid>
          <Grid size={3}>
            <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px', flexFlow: 'start'}}>
            <Chip size='small' label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip size='small' label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip size='small' label="Bootstrap" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip size='small' label="JQuery" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip size='small' label="PHP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip size='small' label="Kumbia PHP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip size='small' label="MySql" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip size='small' label="GitLab" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip size='small' label="WinSCP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          </Stack>
          </Grid>
          <Grid size={7}>
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
      <Box sx={{ flexGrow: 1, marginTop: 5, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: 2 }}>
      <Grid container spacing={3} sx={{ margin: 3, padding: 3 }}>
          <Grid size="grow" styles={{     
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between"
          }}>
            <p>Grupo Agni</p>
            <p>Septembre 2021 - Août 2023</p>
            <div styles={{ width: "200px" }}>
              <img style={{ width: "150px" }} src="/files/grupo_agni.jpeg" />
            </div>
          </Grid>
          <Grid size={3}>
          <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px'}}>
            <Chip label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="Material UI" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="Javascript" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="React" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="Next JS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="PHP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="Laravel" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="Docker" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="Mongo DB" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="AWS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
            <Chip label="GitHub" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          </Stack>
          </Grid>
          <Grid size={7}>
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
      <Box sx={{ flexGrow: 1, marginTop: 5, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: 2 }}>
      <Grid container spacing={3} sx={{ margin: 3, padding: 3 }}>
          <Grid size="grow" styles={{     
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between"
          }}>
            <p>Arte y Parte</p>
            <p>Juin 2021 - Janvier 2022</p>
            <div styles={{ width: "200px" }}>
              <img style={{ width: "150px" }} src="/files/arte_y_parte.png" />
            </div>
          </Grid>
          <Grid size={3}>
            <Stack direction="row" spacing={2} marginBottom={2} marginTop={1} sx={{ flexWrap: 'wrap', rowGap: '10px' }}>
              <Chip size='small' label="HTML" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
              <Chip size='small' label="CSS" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
              <Chip size='small' label="Bootstrap" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
              <Chip size='small' label="JQuery" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
              <Chip size='small' label="PHP" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
              <Chip size='small' label="SiteGround" sx={{ '& .MuiChip-label': {fontSize: '15px', fontWeight: '600'}}}/>
          </Stack>
          </Grid>
          <Grid size={7}>
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