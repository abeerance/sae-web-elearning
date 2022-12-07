import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import Link from 'next/link';

type NavigationLinksProps = {
  topic: string;
  subTopic: string;
};

export const NavigationLinks = ({ topic, subTopic }: NavigationLinksProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        marginBottom: '1.5rem',
      }}
    >
      <Box
        sx={{
          background: '#f58700',
          height: '20px',
          width: '20px',
          position: 'absolute',
          top: 10,
          left: -10,
        }}
      />
      <Typography
        sx={{
          fontSize: '35px',
          zIndex: 200,
          fontWeight: 700,
          fontFamily: 'Ubuntu Mono',
        }}
      >
        <Link href={`/${topic}/${subTopic}`}>
          {t(`sections.${topic}.${subTopic}`)}
        </Link>
      </Typography>
    </Box>
  );
};
