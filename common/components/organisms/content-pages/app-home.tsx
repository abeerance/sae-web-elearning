import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { H1Text } from '../../atoms/typography/h1-text';
import { Paragraph } from '../../atoms/typography/paragraph';
import { SectionContent } from '../../molecules/sections/section-content';

export const AppHome = () => {
  const { t } = useTranslation();

  return (
    <>
      <H1Text title="JavaScript Notes and References" boxWidth={400} />
      <Box sx={{ marginY: '5rem' }}>
        <Paragraph text={t('home.welcome1')} />
        <Paragraph text={t('home.welcome2')} />
        <Paragraph text={t('home.welcome3')} />
      </Box>
      <Box className="all-sections">
        <SectionContent />
      </Box>
    </>
  );
};
