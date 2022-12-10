import { Box, Typography } from '@mui/material';
import { CurrentCourseButtonProps } from '../../types/types';
import Searchbar from '../common/searchbar/searchbar';
import { UserBar } from '../user/user-bar';
import { NavigationWrapper } from './navigation-wrapper';

export default function Aside({
  currentCourse,
  setCurrentCourse,
}: CurrentCourseButtonProps) {
  return (
    <Box
      sx={{
        margin: '1rem 1rem 1rem 0',
        width: '350px',
        padding: '2rem',
        background: '#F1EDE8',
        borderRadius: '15px',
        height: 'calc(100% - 2rem)',
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      }}
    >
      <UserBar />
      <Searchbar />
      <Typography
        sx={{
          alignSelf: 'flex-start',
          fontWeight: 700,
          fontSize: '2rem',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        JavaScript Topics
      </Typography>
      <NavigationWrapper currentCourse={currentCourse} />
    </Box>
  );
}
