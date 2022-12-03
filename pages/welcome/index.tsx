import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { H1Text } from '../../common/components/atoms/typography/h1-text';
import { Paragraph } from '../../common/components/atoms/typography/paragraph';
import { SectionContent } from '../../common/components/molecules/sections/section-content';

export const AppHome = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <H1Text title="JavaScript Notes and References" boxWidth={400} />
      <Box sx={{ marginY: '5rem' }}>
        <Paragraph text={t('home.welcome1')} />
        <Paragraph text={t('home.welcome2')} />
        <Paragraph text={t('home.welcome3')} />
      </Box>
      <Box className="all-sections">
        <SectionContent />
      </Box>
    </Box>
  );
};
