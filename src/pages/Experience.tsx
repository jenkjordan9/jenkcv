import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, IconButton } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CodeIcon from '@mui/icons-material/Code';
import Groups3Icon from '@mui/icons-material/Groups3';
import GroupsIcon from '@mui/icons-material/Groups';
import CssIcon from '@mui/icons-material/Css';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ApiIcon from '@mui/icons-material/Api';
import SchoolIcon from '@mui/icons-material/School';

const skills = [
  { name: 'Agile Team Collaboration:',
    icon: <GroupsIcon />,
    description: `Actively participated in an Agile development team, focusing on both
    front-end and back-end development tasks. Facilitated swift project delivery through effective sprint
    planning, task prioritisation, and problem-solving during daily stand-ups, enhancing team productivity
    and project turnaround time.`
  },
  { name: 'Front-End Development with React JS:',
    icon: <CodeIcon />,
    description: `Spearheaded the development of reusable front-end
    components using React JS, including custom forms, node trees, and audit trails.`
  },
  { name: 'Code Reviews and Team Feedback:',
    icon: <EditNoteIcon />,
    description: `Led code review sessions on GitHub, providing constructive
    feedback to peers to enhance code quality and maintainability.`
  },
  { name: 'Collaboration with UX Designers and Business Analysts:',
    icon: <Groups3Icon />,
    description: `Worked closely with UX designers and
    business analysts to translate business requirements into technical specifications. Delivered
    high-quality features that met precise functional and aesthetic specifications.`
  },
  { name: 'CSS and Front-End Frameworks:',
    icon: <CssIcon />,
    description: `Utilised CSS and front-end frameworks such as MUI to create
    aesthetically pleasing and responsive components and web pages. This work contributed to a more
    engaging user experience and supported a consistent brand identity across platforms.`
  },
  { name: 'Research and Technology Integration:',
    icon: <IntegrationInstructionsIcon />,
    description: `Researched and integrated new libraries and technologies into
    projects, staying ahead of industry trends and ensuring our tech stack remains modern and efficient.`
  },
  { name: 'RESTful API Development:',
    icon: <ApiIcon />,
    description: `Developed secure and scalable RESTful APIs using Express JS, which
    streamlined data interaction between front-end and back-end systems.`
  },
  { name: 'Mentorship of Apprentices:',
    icon: <SchoolIcon />,
    description: `Mentored apprentices, providing guidance on coding practices, project
    work, and career development.`
  },
];

const Experience: React.FC = () => {

  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const handleIconClick = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };
  return (
    <Box id="experience" sx={{ padding: '80px 0' }}>
      <Container>
        <Typography fontWeight="bold" variant="h2" gutterBottom>Experience</Typography>
        <Typography variant="h4" gutterBottom>KPMG:</Typography>
        <Typography sx={{ pb: '60px' }}variant="h5" gutterBottom>
          August <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>2019 - present</span>
        </Typography>

        <Grid container spacing={8} justifyContent="center">
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3} key={skill.name} display="flex" justifyContent="center">
              {expandedSkill === skill.name ? (
                <Card sx={{ backgroundColor: '#00338D', color: 'white', width: '100%', length: '' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
                    <Typography fontWeight="bold" variant="h6" sx={{ mt: 1, color: 'white' }}>{skill.name}</Typography>
                    <Typography variant="body2" sx={{ mt: 4, color: 'white', fontSize: 17, mb: 1 }}>{skill.description}</Typography>
                  </CardContent>
                </Card>
              ) : (
                <IconButton
                  onClick={() => handleIconClick(skill.name)}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: '#f5f5f5',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                      backgroundColor: '#e0e0e0',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {React.cloneElement(skill.icon, { style: { fontSize: 40, color: '#00338D' } })}
                </IconButton>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};


export default Experience;
