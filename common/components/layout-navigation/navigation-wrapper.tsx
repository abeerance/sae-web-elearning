import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { collapsed } from '../../../pages/_app';
import { CurrentCourseButtonProps } from '../../types/types';
import { Globals } from '../../utils/utils';
import { MainNavigation } from './main-navigation';

export const NavigationWrapper = ({
  currentCourse,
}: CurrentCourseButtonProps) => {
  const [navCollapsed] = useAtom(collapsed);
  const router = useRouter();

  const handleOnClick = (module: string) => {
    if (currentCourse === 'javascript') {
      router.push({
        pathname: 'javascript/module/[name]',
        query: { name: module },
      });
    }
  };

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
              onClick={() => {
                handleOnClick(element.topic);
              }}
            >
              <MainNavigation navigationElement={element.topic} />
            </Box>
          ))}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
