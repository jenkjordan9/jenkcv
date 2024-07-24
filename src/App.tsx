import React from 'react';
import { Typography, Button, Box, Container, IconButton } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter'
import Skills from './pages/Skills';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import bg1 from './img/bg1.svg';
import bg2 from './img/bg2.svg';
import jenk from './img/jenk.jpg';


const App: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container sx={{  justifyContent: "center" ,display: 'flex', pt: '300px', pb: '450px'}}>
          <Box sx={{ flexBasis: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidthwidth: '600px' }}>
            <Typography variant="h1">Jenk Ali</Typography>
            <Typography variant="h2" style={{ fontWeight: 'normal', fontSize: '40px' }}>
              I'm a {' '}
              <span style={{ fontWeight: 'bold', fontSize: '40px' }}>
                <Typewriter
                  words={['Software developer', 'Golfer', 'Gym goer', 'Gamer', 'Car lover']}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button size="large"sx={{ backgroundColor: "#168fe9"}} variant="contained" href="#skills">Skills</Button>
              <Button sx={{ backgroundColor: "#00338D"}} size="large"  variant="contained" href="#experience">Experience</Button>
              <Button sx={{ backgroundColor: "#FA7268"}} size="large" variant="contained" href="#education">Education</Button>
              <Button  color="error" size="large" variant="contained" href="#about">About</Button> 
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img
              src={jenk}
              alt="Jenk Ali"
              style={{
                width: '200px',
                height: '200px',
                border: '2px solid white',
                borderRadius: '10%',
                marginBottom: '20px'
              }}
            />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            <IconButton href="https://www.linkedin.com/in/jenk-ali-1168b1198/" target="_blank" color="primary">
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton href="mailto:jenk.ali9@outlook.com" target="_blank" color="primary">
              <EmailIcon fontSize="large" />
            </IconButton>
          </Box>
          </Box>
        </Container>
        <Box sx={{ alignItems: "center" }}>
          <Skills/>
          <Box sx={{pb: '350px'}}/>
          <Experience />
          <Box sx={{pb: '100px'}}/>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box sx={{ alignItems: "center" }}>
          <Education/>
          <Box sx={{pb: '700px'}}/>
          <About />
        </Box>

      </Box>
    </Box>
  );
};

export default App;
