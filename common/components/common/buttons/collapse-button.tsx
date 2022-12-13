import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { RiArrowLeftRightLine } from 'react-icons/ri';
import { collapsed } from '../../../../pages/_app';

export const CollapseButton = () => {
  const [navCollapsed, setNavCollapsed] = useAtom(collapsed);

  return (
    <Box
      component="button"
      sx={{
        position: 'fixed',
        zIndex: 999,
        background: '#f8f8f8',
        bottom: '20px',
        border: 'none',
        cursor: 'pointer',
        left: `${navCollapsed ? '20px' : '200px'} `,
        padding: '1rem',
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
      <RiArrowLeftRightLine size={30} color={'#232323'} />
    </Box>
  );
};
