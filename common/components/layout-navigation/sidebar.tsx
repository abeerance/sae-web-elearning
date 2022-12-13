import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { collapsed } from '../../../pages/_app';
import { CurrentCourseButtonProps } from '../../types/types';
import { CollapseButton } from '../common/buttons/collapse-button';
import Searchbar from '../common/searchbar/searchbar';
import { JavaScriptButton } from '../navigation-buttons/javascript-button';
import { ReactButton } from '../navigation-buttons/react-button';
import { UserBar } from '../user/user-bar';
import { NavigationWrapper } from './navigation-wrapper';

export default function SideBar({
  currentCourse,
  setCurrentCourse,
}: CurrentCourseButtonProps) {
  const [navCollapsed] = useAtom(collapsed);

  return (
    <Box
      sx={{
        background: '#0C1116',
        height: '100%',
        width: `${navCollapsed ? '80px' : '300px'}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        paddingX: '1.5rem',
      }}
    >
      <CollapseButton />
      <UserBar />
      <Box
        sx={{
          display: `${navCollapsed ? 'none' : 'flex'}`,
          alignItems: 'center',
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
      <Searchbar />
      <NavigationWrapper currentCourse={currentCourse} />
    </Box>
  );
}
