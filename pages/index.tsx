import { Box } from '@mui/material';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useState } from 'react';
import Sidebar from '../common/components/organisms/navigation/sidebar-navigation';
import { ContentSection } from '../common/components/templates/content-section/content-section';

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const sidebarWidth = 350;
  const [currentNav, setCurrentNav] = useState<string>('home');

  return (
    <div className="container">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
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
      )}
    </div>
  );
};

export default Home;
