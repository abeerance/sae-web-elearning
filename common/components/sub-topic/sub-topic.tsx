import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type SubTopicProps = {
  index: number;
  topic: string;
  subTopic: string;
};

export const SubTopic = ({ index, topic, subTopic }: SubTopicProps) => {
  const { t } = useTranslation();

  const handleOpenTopic = () => {};

  return (
    <Box
      component="button"
      sx={{
        display: 'flex',
        marginBottom: '12px',
        width: '100%',
        border: 'none',
        background: 'none',
      }}
      onClick={handleOpenTopic}
    >
      <Typography
        sx={{
          fontSize: '20px',
          marginRight: '10px',
        }}
      >
        0{index + 1}
      </Typography>
      <Typography
        sx={{
          fontSize: '20px',
          marginRight: '10px',
        }}
      >
        -
      </Typography>
      <Typography sx={{ fontSize: '20px', textAlign: 'left' }}>
        {t(`sections.${topic}.${subTopic}`)}
      </Typography>
    </Box>
  );
};
