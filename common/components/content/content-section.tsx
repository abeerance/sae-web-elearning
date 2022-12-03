import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { collapsed, sidebarWidth } from '../../../pages';
import AppHome from '../../../pages/welcome';

export const ContentSection = () => {
  const [width] = useAtom(sidebarWidth);
  const [contentWidth, setContentWidth] = useState<number>();
  const [navCollapsed] = useAtom(collapsed);

  useEffect(() => {
    const setContentSize = () => {
      setContentWidth(window.innerWidth - width);
    };
    if (!navCollapsed) {
      setContentSize();
    }
  }, [navCollapsed, width]);

  return (
    <Box
      sx={{
        height: '100vh',
        width: `${navCollapsed ? '100vw' : `${contentWidth}px`}`,
        padding: '5rem 7rem 0',
        overflowY: 'scroll',
      }}
    >
      <AppHome />
    </Box>
  );
};
