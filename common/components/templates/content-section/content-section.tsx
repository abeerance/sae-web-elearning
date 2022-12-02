import { Box } from '@mui/material';
import { AppHome } from '../../organisms/content-pages/app-home';

type ContentSectionProps = {
  suppressHydrationWarning: boolean;
  sidebarWidth: number;
};

export const ContentSection = ({ sidebarWidth }: ContentSectionProps) => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: `calc(100% - ${sidebarWidth}px)`,
        padding: '5rem 7rem 0',
        overflowY: 'scroll',
      }}
    >
      <AppHome />
    </Box>
  );
};
