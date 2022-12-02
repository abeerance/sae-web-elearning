import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { UserBar } from '../../molecules/user-bar/user-bar';

const SideBar = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: '#2C2C2C',
        height: '100%',
        width: '40rem',
        color: '#f8f8f8',
        borderRight: '0.5px #A3ADB9 solid',
        padding: '50px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>
        {t('navigation.welcome')}
      </Typography>
      <UserBar />
    </Box>
  );
};

export default SideBar;
