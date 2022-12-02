import { Box } from '@mui/material';
import React from 'react';
import { RiArrowLeftRightLine } from 'react-icons/ri';

type CollapseButtonProps = {
  sidebarWidth: number;
  navCollapsed: boolean;
  setNavCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CollapseButton = ({
  sidebarWidth,
  navCollapsed,
  setNavCollapsed,
}: CollapseButtonProps) => {
  const collapseButtonPosition = sidebarWidth - 25;
  console.log(collapseButtonPosition);
  return (
    <Box
      component="button"
      sx={{
        position: 'absolute',
        zIndex: 999,
        background: '#f8f8f8',
        top: '35px',
        cursor: 'pointer',
        left: `${navCollapsed ? '30px' : `${collapseButtonPosition}px`} `,
        padding: '0.8rem',
        borderRadius: '10px',
      }}
      onClick={() => {
        if (!navCollapsed) {
          setNavCollapsed(true);
        } else {
          setNavCollapsed(false);
        }
      }}
    >
      <RiArrowLeftRightLine size={24} color="#000" />
    </Box>
  );
};
