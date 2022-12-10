import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { CurrentCourseButtonProps } from '../../types/types';
import { Globals } from '../../utils/utils';
import { MainNavigation } from './main-navigation';

export const NavigationWrapper = ({
  currentCourse,
}: CurrentCourseButtonProps) => {
  const router = useRouter();

  const handleOnClick = (url: string) => {
    if (currentCourse === 'javascript') {
      router.replace({ pathname: `javascript${url}` });
    }
  };

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
                handleOnClick(element.url);
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
