import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, LinearProgress } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIcon from '@mui/icons-material/Assignment';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import ApiIcon from '@mui/icons-material/Api';

const skills = [
  { name: 'JavaScript', icon: <CodeIcon sx={{ color: 'white'}}/>, level: 80 },
  { name: 'React', icon: <CodeIcon sx={{ color: 'white'}}/>, level: 80 },
  { name: 'TypeScript', icon: <CodeIcon sx={{ color: 'white'}}/>, level: 60 },
  { name: 'Node.js', icon: <StorageIcon sx={{ color: 'white'}}/>, level: 80 },
  { name: 'CSS', icon: <BrushIcon sx={{ color: 'white'}}/>, level: 80 },
  { name: 'Git', icon: <GitHubIcon sx={{ color: 'white'}}/>, level: 90 },
  { name: 'Jira', icon: <AssignmentIcon sx={{ color: 'white'}}/>, level: 90 },
  { name: 'SQL', icon: <JoinInnerIcon sx={{ color: 'white'}}/>, level: 70 },
  { name: 'Express JS', icon: <ApiIcon sx={{ color: 'white'}}/>, level: 75 },
];

const Skills: React.FC = () => {
  return (
    <Box id="skills" >
      <Container>
        <Typography sx={{ mb: '60px'}} fontWeight="bold" variant="h2" gutterBottom>Skills</Typography>
        <Grid container spacing={4}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <Card sx={{ }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#168fe9' }}>
                  {skill.icon}
                  <Typography variant="h6" sx={{ mt: 2, color: 'white' }}>{skill.name}</Typography>
                  <Box sx={{ width: '100%', mt: 2 }}>
                    <LinearProgress sx={{
                      height: 10,
                      borderRadius: 5,
                      [`& .${linearProgressClasses.bar}`]: {
                        backgroundColor: '#FA7268',  // Set your desired color here
                      },
                      backgroundColor: '#fca8a1', // Lighten the background color if desired
                      }} 
                      variant="determinate"
                      value={skill.level} 
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
