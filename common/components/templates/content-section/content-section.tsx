import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Basics from '../../../../pages/basics';
import { VariablesAndStatements } from '../../../../pages/variables-and-statements';
import { AppHome } from '../../../../pages/welcome';

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
