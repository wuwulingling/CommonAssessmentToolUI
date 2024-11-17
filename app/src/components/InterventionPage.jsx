import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

const InterventionPage = () => {
  const { interventionKey } = useParams(); // Extract the dynamic path parameter

  // Revert "-" back to spaces and capitalize each word
  const interventionName = interventionKey
    .replace(/-/g, ' ') // Replace "-" with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word

  return (
    <Box sx={{ p: 4, maxWidth: 800, margin: '0 auto' }}>
      <Paper
        elevation={3}
        sx={{ p: 4 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          align="center"
        >
          {interventionName}
        </Typography>
        <Typography
          variant="body1"
          align="center"
        >
          This is a dummy page for the {interventionName} intervention.
        </Typography>
      </Paper>
    </Box>
  );
};

export default InterventionPage;
