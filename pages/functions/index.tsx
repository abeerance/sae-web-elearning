import { Box } from '@mui/material';
import { t } from 'i18next';
import { H1Text } from '../../common/components/common/typography/h1-text';
import { H2Text } from '../../common/components/common/typography/h2-text';
import { Paragraph } from '../../common/components/common/typography/paragraph';

export default function Functions() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1024px' }}>
      <H1Text title="Functions and whatnot" boxWidth={150} hasMarginBottom />
      <Paragraph text={t('functions.intro1')} />
      <H2Text title="Built-In Functions" marginTop="4rem" hasMarginTop />
    </Box>
  );
}
