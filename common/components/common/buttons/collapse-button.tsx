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
        background: `${navCollapsed ? '#f8f8f8' : '#2C2C2C'}`,
        top: '25px',
        border: 'none',
        cursor: 'pointer',
        left: `${navCollapsed ? '20px' : '350px'} `,
        padding: `${navCollapsed ? '0.8rem' : '2rem 1.5rem'}`,
        borderRadius: `${navCollapsed ? '10px' : '0 10px 10px 0'}`,
      }}
      onClick={() => {
        if (!navCollapsed) {
          setNavCollapsed(true);
        } else {
          setNavCollapsed(false);
        }
      }}
    >
      <RiArrowLeftRightLine
        size={30}
        color={`${navCollapsed ? '#000' : '#fff'}`}
      />
    </Box>
  );
};
