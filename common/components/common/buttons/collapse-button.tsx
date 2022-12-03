import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { RiArrowLeftRightLine } from 'react-icons/ri';
import { collapsed, sidebarWidth } from '../../../../pages';

export const CollapseButton = () => {
  const [width] = useAtom(sidebarWidth);
  const [navCollapsed, setNavCollapsed] = useAtom(collapsed);
  const collapseButtonPosition = width - 25;

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
