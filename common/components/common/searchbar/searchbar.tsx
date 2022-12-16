import { Box, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React, { RefObject, useLayoutEffect } from 'react';
import { collapsed } from '../../../../pages/_app';

type SearchbarProps = {
  searchbarRef: RefObject<HTMLDivElement>;
  setSearchbarHeight: React.Dispatch<React.SetStateAction<number>>;
};

export default function Searchbar({
  searchbarRef,
  setSearchbarHeight,
}: SearchbarProps) {
  const [navCollapsed] = useAtom(collapsed);

  useLayoutEffect(() => {
    if (searchbarRef.current !== null) {
      setSearchbarHeight(searchbarRef.current.clientHeight);
    }
  }, [setSearchbarHeight, searchbarRef]);

  return (
    <Box
      ref={searchbarRef}
      sx={{
        height: '5rem',
        width: '100%',
        background: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '4px 3px 0 2px #EF6A04',
        padding: '1rem',
        display: `${navCollapsed ? 'none' : 'flex'}`,
        alignItems: 'center',
        margin: '2rem 0 3rem',
      }}
    >
      <Typography sx={{ fontSize: '2rem', color: '#14181D' }}>
        Search
      </Typography>
    </Box>
  );
}
