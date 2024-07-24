import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ pb: '50px', minWidth: '100vw' }}>
      <Container>
        <Typography fontWeight="bold" variant="h2" gutterBottom>About Me</Typography>
        <Typography fontSize='20px' variant="body1">
            Hi, my name is Jenk Ali and I am currently a software engineer at KPMG.
        </Typography>
        <Typography fontSize='20px' sx={{ marginBottom: '16px' }} variant="body1">
            I have 5 years of professional experience ranging in a varitety of web development fields such as:
            Front-end development, Back-end development, and Database management.
        </Typography>
        <Typography fontSize='20px' sx={{ marginBottom: '16px' }} variant="body1">
            I have been passionate about software development since I was 17, and have enjoyed learning and broadening my understanding of the
            field over the last 5 years. I am currently looking for a role more senior than my last
            in order to push my skills and I further.
        </Typography>
        <Typography fontSize='20px' sx={{ marginBottom: '16px' }} variant="body1">
            Aside from work, I have a plethora of hobbies including golf, the gym, gaming, cars, football, f1 and more.
        </Typography>
        <Typography fontSize='20px' sx={{ marginBottom: '16px' }} variant="body1">
            Please contact me about any questions or opportunities at jenk.ali9@outlook.com or via my LinkedIn at the top of the page.
        </Typography>

      </Container>
    </Box>
  );
};

export default About;
