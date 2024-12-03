import React from "react";
import Parallax from "../components/Parallax";
import { Box, Container } from '@mui/material';

function Home() {

  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', zIndex: "-1" }}>
    <Container>
        <Parallax />
    </Container>
    </Box>
  );
}

export default Home;
