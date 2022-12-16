import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { useLayoutEffect, useState } from 'react';
import { collapsed } from '../../../pages/_app';
import { Globals } from '../../utils/utils';
import { MainNavigation } from './main-navigation';

type NavigationWrapperProps = {
  currentCourse: string;
  innerHeight: number | null;
  collapseHeight: number;
  searchbarHeight: number;
  moduleHeight: number;
  userBarheight: number;
};

export const NavigationWrapper = ({
  currentCourse,
  innerHeight,
  collapseHeight,
  searchbarHeight,
  moduleHeight,
  userBarheight,
}: NavigationWrapperProps) => {
  const [navCollapsed] = useAtom(collapsed);
  const [wrapperHeight, setWrapperHeight] = useState(0);

  useLayoutEffect(() => {
    if (innerHeight !== null) {
      setWrapperHeight(
        innerHeight -
          collapseHeight -
          searchbarHeight -
          moduleHeight -
          userBarheight,
      );
    }
  }, [
    setWrapperHeight,
    innerHeight,
    collapseHeight,
    searchbarHeight,
    moduleHeight,
    userBarheight,
  ]);

  console.log(wrapperHeight);

  return (
    <Box
      sx={{
        width: '100%',
        display: `${navCollapsed ? 'none' : 'flex'}`,
        flexDirection: 'column',
        overflowY: 'scroll',
        alignItems: 'center',
        marginY: '2rem',
        height: `${wrapperHeight - 140}px !important`,
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
