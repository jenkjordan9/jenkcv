import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const education = [
  {
    institution: 'Queen Mary University of London',
    degree: 'Bachelor of Science in Computer Science',
    grade: 'First Class Honours',
    date: 'September 2019 - July 2024',
  },
  {
    institution: 'KPMG',
    degree: 'Software Development Apprentice',
    grade: 'Distinction',
    date: 'August 2019 - July 2024',
  },
];

const Education: React.FC = () => {
  return (
    <Box id="education">
      <Container>
        <Typography variant="h2" fontWeight="bold" gutterBottom>Education</Typography>
        <Timeline position="alternate">
          {education.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator color='white'>
                <TimelineDot sx={{ backgroundColor: 'white' }}/>
                {index < education.length - 1 && <TimelineConnector sx={{ backgroundColor: 'white' }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ flex: 1 }}>
                <Card sx={{ backgroundColor: '#FA7268', color: 'white' }}>
                  <CardContent>
                    <Typography fontWeight='bold' variant="h6" sx={{ color: 'white' }}>{edu.institution}</Typography>
                    <Typography variant="body1" sx={{ color: 'white' }}>{edu.degree}</Typography>
                    <Typography variant="body2" sx={{ color: 'white', fontStyle: 'italic' }}>{edu.date}</Typography>
                    <Typography variant="body2" sx={{ color: 'white', fontStyle: 'italic', fontWeight: 'bold' }}>{edu.grade}</Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default Education;
