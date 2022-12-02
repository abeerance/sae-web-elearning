import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { AppHome } from '../../organisms/content-pages/app-home';
import Basics from '../../organisms/content-pages/basics';
import { VariablesAndStatements } from '../../organisms/content-pages/variables-and-statements';

type ContentSectionProps = {
  suppressHydrationWarning: boolean;
  sidebarWidth: number;
  currentNav: string;
  navCollapsed: boolean;
};

export const ContentSection = ({
  sidebarWidth,
  currentNav,
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

  return (
    <Box
      sx={{
        height: '100vh',
        width: `${navCollapsed ? '100vw' : `${contentWidth}px`}`,
        padding: '5rem 7rem 0',
        overflowY: 'scroll',
      }}
    >
      {currentNav === 'home' ? (
        <AppHome />
      ) : currentNav === 'basics' ? (
        <Basics />
      ) : currentNav === 'variables' ? (
        <VariablesAndStatements />
      ) : (
        <AppHome />
      )}
    </Box>
  );
};
