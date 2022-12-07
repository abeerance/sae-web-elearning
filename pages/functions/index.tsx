import { Box } from '@mui/material';
import { t } from 'i18next';
import { H1Text } from '../../common/components/common/typography/h1-text';
import { Paragraph } from '../../common/components/common/typography/paragraph';
import BuiltInFunctions from './built-in';
import CustomFunctions from './custom-functions';

export default function Functions() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1024px' }}>
      <H1Text title="Functions and whatnot" boxWidth={150} hasMarginBottom />
      <Paragraph text={t('functions.intro1')} />
      <Paragraph text={t('functions.intro2')} />
      <Paragraph text={t('functions.intro3')} />
      <BuiltInFunctions />
      <CustomFunctions />
    </Box>
  );
}
