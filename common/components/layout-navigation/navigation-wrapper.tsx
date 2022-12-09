import { Box } from '@mui/material';
import { Globals } from '../../utils/utils';
import { MainNavigation } from './main-navigation';

export const NavigationWrapper = () => {
  return (
    <Box sx={{ width: '100%', maxHeight: '400px', overflowY: 'scroll' }}>
      {Globals.navigationElements.map((element) => (
        <Box
          component="button"
          key={element.topic}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            justifyContent: 'space-between',
          }}
        >
          <MainNavigation navigationElement={element.topic} url={element.url} />
        </Box>
      ))}
    </Box>
  );
};
