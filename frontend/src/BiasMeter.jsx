import { Box, Typography, LinearProgress } from '@mui/material';

const BiasMeter = ({ score }) => {
  const percent = Math.round(score * 100);
  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="subtitle1">Bias Score: {percent}%</Typography>
      <LinearProgress variant="determinate" value={percent} />
    </Box>
  );
};

export default BiasMeter;