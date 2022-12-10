import { Box } from '@mui/material';
import { CurrentCourseButtonProps } from '../../types/types';
import { JavaScriptButton } from '../navigation-buttons/javascript-button';
import { ReactButton } from '../navigation-buttons/react-button';

export default function SideBar({
  currentCourse,
  setCurrentCourse,
}: CurrentCourseButtonProps) {
  return (
    <Box
      sx={{
        background: '#232227',
        height: '100%',
        width: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'scroll',
      }}
    >
      <JavaScriptButton
        currentCourse={currentCourse}
        setCurrentCourse={setCurrentCourse}
      />
      <ReactButton
        currentCourse={currentCourse}
        setCurrentCourse={setCurrentCourse}
      />
    </Box>
  );
}
