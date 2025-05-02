import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

const BiasResultCard = ({ label, score }) => {
  const biasLevel = `${label.charAt(0).toUpperCase() + label.slice(1)} bias likelihood: ${Math.round(score * 100)}%`;

  return (
    <Card sx={{ minWidth: 275, marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">{biasLevel}</Typography>
        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress variant="determinate" value={score * 100} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BiasResultCard;
