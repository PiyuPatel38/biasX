import { Button, Stack } from '@mui/material';

const SampleTextOptions = ({ onSelect }) => (
  <Stack spacing={2}>
    <Button onClick={() => onSelect("She was rejected despite her credentials.")}>Resume Bias</Button>
    <Button onClick={() => onSelect("He got the promotion, not her.")}>Promotion Bias</Button>
  </Stack>
);

export default SampleTextOptions;