import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { H1Text } from '../../common/components/common/typography/h1-text';
import { Paragraph } from '../../common/components/common/typography/paragraph';
import { Section } from '../../common/components/content/section/section';

export default function JavaScriptHome() {
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%' }}>
      <H1Text title="JavaScript Notes and References" />
      <Box sx={{ marginY: '5rem' }}>
        <Paragraph text={t('home.welcome1')} hasMargin />
        <Paragraph text={t('home.welcome2')} hasMargin />
        <Paragraph text={t('home.welcome3')} />
      </Box>
      <Box className="all-sections">
        <Section />
      </Box>
    </Box>
  );
}
