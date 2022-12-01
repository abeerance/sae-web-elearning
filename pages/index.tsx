import { Box } from '@mui/material';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import SideBar from '../common/components/organisms/navigation/sidebar-navigation';

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      ) : (
        <Box sx={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
          <SideBar />
        </Box>
      )}
    </div>
  );
};

export default Home;
