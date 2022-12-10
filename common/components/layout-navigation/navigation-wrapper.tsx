import { Box } from '@mui/material';
import { Globals } from '../../utils/utils';
import { MainNavigation } from './main-navigation';

export const NavigationWrapper = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        alignItems: 'center',
      }}
    >
      {Globals.navigationElements.map((element) => (
        <Box
          component="button"
          key={element.topic}
          sx={{
            width: 'calc(100% - 20px)',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            overflowY: 'scroll',
            border: 'none',
            cursor: 'pointer',
            justifyContent: 'space-between',
          }}
        >
          <MainNavigation
            navigationElement={element.topic}
            url={`javascript/${element.url}`}
          />
        </Box>
      ))}
    </Box>
  );
};
