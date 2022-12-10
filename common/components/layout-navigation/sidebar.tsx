import { Box } from '@mui/material';
import { JavaScriptButton } from '../navigation-buttons/javascript-button';
import { ReactButton } from '../navigation-buttons/react-button';

export default function SideBar() {
  return (
    <Box
      sx={{
        background: '#24331E',
        height: '100%',
        width: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'scroll',
      }}
    >
      <JavaScriptButton />
      <ReactButton />
    </Box>
  );
}
