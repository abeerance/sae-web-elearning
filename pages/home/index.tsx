import { Box } from '@mui/material';
import { H1Text } from '../../common/components/common/typography/h1-text';

export default function WebappHome() {
  return (
    <Box sx={{ width: '100%' }}>
      <H1Text title="Welcome back! please choose one of the left navigation links" />
      <H1Text title="So the sub navigation on the right is visible" />
    </Box>
  );
}
