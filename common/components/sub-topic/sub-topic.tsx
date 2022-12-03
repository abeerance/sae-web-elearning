import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type SubTopicProps = {
  index: number;
  topic: string;
  subTopic: string;
};

export const SubTopic = ({ index, topic, subTopic }: SubTopicProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', marginBottom: '12px' }}>
      <Typography
        sx={{
          fontFamily: 'Ubuntu Mono',
          fontSize: '20px',
          marginRight: '10px',
        }}
      >
        0{index + 1}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Ubuntu Mono',
          fontSize: '20px',
          marginRight: '10px',
        }}
      >
        -
      </Typography>
      <Typography sx={{ fontFamily: 'Ubuntu Mono', fontSize: '20px' }}>
        {t(`sections.${topic}.${subTopic}`)}
      </Typography>
    </Box>
  );
};
