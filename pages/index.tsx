import { Box } from '@mui/material';
import { useState } from 'react';
import Sidebar from '../common/components/organisms/navigation/sidebar-navigation';
import { ContentSection } from '../common/components/templates/content-section/content-section';

const Home = () => {
  const sidebarWidth = 350;
  const [currentNav, setCurrentNav] = useState<string>('home');

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        <Sidebar sidebarWidth={sidebarWidth} setCurrentNav={setCurrentNav} />
        <ContentSection
          suppressHydrationWarning
          sidebarWidth={sidebarWidth}
          currentNav={currentNav}
        />
      </Box>
    </>
  );
};

export default Home;
