import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { collapsed } from '../../../pages/_app';
import { CurrentCourseButtonProps } from '../../types/types';
import { Globals } from '../../utils/utils';
import { MainNavigation } from './main-navigation';

export const NavigationWrapper = ({
  currentCourse,
}: CurrentCourseButtonProps) => {
  const [navCollapsed] = useAtom(collapsed);

  return (
    <Box
      sx={{
        width: '100%',
        display: `${navCollapsed ? 'none' : 'flex'}`,
        flexDirection: 'column',
        overflowY: 'scroll',
        alignItems: 'center',
      }}
    >
      {currentCourse === 'javascript' ? (
        <>
          {Globals.navigationElements.map((element) => (
            <Box
              key={element.topic}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                justifyContent: 'space-between',
                marginY: '2px',
              }}
            >
              <MainNavigation
                navigationElement={element.topic}
                module={element.url}
              />
            </Box>
          ))}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
