import { Box } from '@mui/material';
import { Globals } from '../../../utils/utils';
import { MainNavigation } from '../../atoms/main-navigation';

export const Navigation = () => {
  return (
    <Box sx={{ width: '100%' }}>
      {Globals.navigationElements.map((element) => (
        <Box
          key={element.topic}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <MainNavigation navigationElement={element.topic} />
        </Box>
      ))}
    </Box>
  );
};
