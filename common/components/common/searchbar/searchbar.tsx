import { Box, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { collapsed } from '../../../../pages/_app';

export default function Searchbar() {
  const [navCollapsed] = useAtom(collapsed);

  return (
    <Box
      sx={{
        height: '5rem',
        width: '100%',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '4px 3px 0 2px #EF6A04',
        padding: '1rem',
        display: `${navCollapsed ? 'none' : 'flex'}`,
        alignItems: 'center',
        margin: '2rem 0 3rem',
      }}
    >
      <Typography sx={{ fontSize: '2rem' }}>Search</Typography>
    </Box>
  );
}
