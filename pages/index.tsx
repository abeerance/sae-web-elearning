import { Box } from '@mui/material';
import { atom } from 'jotai';
import { CollapseButton } from '../common/components/common/buttons/collapse-button';
import { ContentSection } from '../common/components/content/content-section';

export const sidebarWidth = atom(350);
export const collapsed = atom(false);

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          position: 'relative',
        }}
      >
        <CollapseButton />
        <ContentSection />
      </Box>
    </>
  );
};

export default Home;
