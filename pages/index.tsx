import { Box } from '@mui/material';
import { useState } from 'react';
import { CollapseButton } from '../common/components/atoms/buttons/collapse-button';
import Sidebar from '../common/components/organisms/navigation/sidebar-navigation';
import { ContentSection } from '../common/components/templates/content-section/content-section';

const Home = () => {
  const sidebarWidth = 350;
  const [currentNav, setCurrentNav] = useState<string>('home');
  const [navCollapsed, setNavCollapsed] = useState<boolean>(false);

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
        <CollapseButton
          sidebarWidth={sidebarWidth}
          navCollapsed={navCollapsed}
          setNavCollapsed={setNavCollapsed}
        />
        <Sidebar
          sidebarWidth={sidebarWidth}
          setCurrentNav={setCurrentNav}
          navCollapsed={navCollapsed}
        />
        <ContentSection
          suppressHydrationWarning
          sidebarWidth={sidebarWidth}
          currentNav={currentNav}
          navCollapsed={navCollapsed}
        />
      </Box>
    </>
  );
};

export default Home;
