import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

type SectionSubTopic = {
  index: number;
  topic: string;
  subTopic: string;
};

export const SectionSubTopic = ({
  index,
  topic,
  subTopic,
}: SectionSubTopic) => {
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
