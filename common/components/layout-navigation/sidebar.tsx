import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { useLayoutEffect, useRef, useState } from 'react';
import { useWindowSize } from 'rooks';
import { collapsed } from '../../../pages/_app';
import { CurrentCourseButtonProps } from '../../types/types';
import { CollapseContainer } from '../common/buttons/collapse-button';
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
  const userBarRef = useRef<HTMLDivElement>(null);
  const moduleRef = useRef<HTMLDivElement>(null);
  const searchbarRef = useRef<HTMLDivElement>(null);
  const collapseRef = useRef<HTMLDivElement>(null);
  const [userBarheight, setUserBarHeight] = useState(0);
  const [moduleHeight, setModuleHeight] = useState(0);
  const [searchbarHeight, setSearchbarHeight] = useState(0);
  const [collapseHeight, setCollapseHeight] = useState(0);
  const { innerHeight } = useWindowSize();

  useLayoutEffect(() => {
    if (moduleRef.current !== null) {
      setModuleHeight(moduleRef.current.clientHeight);
    }
  }, [setModuleHeight, moduleRef]);

  return (
    <Box
      sx={{
        background: '#0C1116',
        height: '100%',
        maxHeight: '100vh',
        width: `${navCollapsed ? '80px' : '300px'}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        paddingX: '1.5rem',
        position: 'relative',
      }}
    >
      <Box>
        <UserBar userBarRef={userBarRef} setUserBarHeight={setUserBarHeight} />
        <Box
          sx={{
            display: `${navCollapsed ? 'none' : 'flex'}`,
            alignItems: 'center',
          }}
          ref={moduleRef}
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
        <Searchbar
          searchbarRef={searchbarRef}
          setSearchbarHeight={setSearchbarHeight}
        />
        <NavigationWrapper
          currentCourse={currentCourse}
          innerHeight={innerHeight}
          collapseHeight={collapseHeight}
          searchbarHeight={searchbarHeight}
          moduleHeight={moduleHeight}
          userBarheight={userBarheight}
        />
      </Box>
      <CollapseContainer
        collapseRef={collapseRef}
        setCollapseHeight={setCollapseHeight}
      />
    </Box>
  );
}
