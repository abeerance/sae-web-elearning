import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { AppHome } from '../../organisms/content-pages/app-home';

type ContentSectionProps = {
  suppressHydrationWarning: boolean;
  sidebarWidth: number;
  currentNav: string;
  navCollapsed: boolean;
};

export const ContentSection = ({
  sidebarWidth,
  navCollapsed,
}: ContentSectionProps) => {
  const [contentWidth, setContentWidth] = useState<number>();

  useEffect(() => {
    const setContentSize = () => {
      setContentWidth(window.innerWidth - sidebarWidth);
    };
    if (!navCollapsed) {
      setContentSize();
    }
  }, [navCollapsed, sidebarWidth]);

  console.log(contentWidth);
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
