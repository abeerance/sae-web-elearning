import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import React, { RefObject, useLayoutEffect } from 'react';
import { RiArrowLeftRightLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { collapsed } from '../../../../pages/_app';

type CollapseButtonProps = {
  collapseRef: RefObject<HTMLDivElement>;
  setCollapseHeight: React.Dispatch<React.SetStateAction<number>>;
};

export const CollapseContainer = ({
  collapseRef,
  setCollapseHeight,
}: CollapseButtonProps) => {
  const [navCollapsed, setNavCollapsed] = useAtom(collapsed);

  useLayoutEffect(() => {
    if (collapseRef.current !== null) {
      setCollapseHeight(collapseRef.current.clientHeight);
    }
  }, [setCollapseHeight, collapseRef]);

  return (
    <Box
      ref={collapseRef}
      sx={{
        bottom: '15px',
        position: 'absolute',
        display: 'flex',
        width: '100%',
        paddingX: '1.5rem',
        justifyContent: 'space-between',
        flexDirection: `${navCollapsed ? 'column' : 'row'}`,
      }}
    >
      <Box
        component="button"
        sx={{
          background: '#f8f8f8',
          border: 'none',
          cursor: 'pointer',
          padding: '1rem',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RiLogoutBoxRLine size={30} color={'#232323'} />
      </Box>
      <Box
        component="button"
        sx={{
          background: '#f8f8f8',
          border: 'none',
          cursor: 'pointer',
          padding: '1rem',
          borderRadius: '10px',
          marginTop: `${navCollapsed ? '20px' : 0}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => {
          if (!navCollapsed) {
            setNavCollapsed(true);
          } else {
            setNavCollapsed(false);
          }
        }}
      >
        <RiArrowLeftRightLine size={30} color={'#232323'} />
      </Box>
    </Box>
  );
};
