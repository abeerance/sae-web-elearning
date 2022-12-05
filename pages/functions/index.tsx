import { Box } from '@mui/material';
import { t } from 'i18next';
import builtinExample1 from '../../common/assets/functions/function1.webp';
import dateNowExample from '../../common/assets/functions/function2.webp';
import { ImageWrapper } from '../../common/components/common/images/image-wrapper';
import { H1Text } from '../../common/components/common/typography/h1-text';
import { H2Text } from '../../common/components/common/typography/h2-text';
import { Paragraph } from '../../common/components/common/typography/paragraph';

export default function Functions() {
  console.log('hey');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1024px' }}>
      <H1Text title="Functions and whatnot" boxWidth={150} hasMarginBottom />
      <Paragraph text={t('functions.intro1')} />
      <Paragraph text={t('functions.intro2')} />
      <Paragraph text={t('functions.intro3')} />
      <H2Text title="Built-In Functions" marginTop="4rem" hasMarginTop />
      <Paragraph text={t('functions.builtin1')} />
      <ImageWrapper
        source={builtinExample1}
        description="Tip: you can see by the '>' and '<' arrows if it's a statement or a response. > indicates that it is a statement and < that it is a response to the statement"
        height="150px"
        width="400px"
        fixedWidth
        hasBottomDescription
      />
      <Paragraph text={t('functions.builtin2')} />
      <ImageWrapper
        source={dateNowExample}
        description="An example how to work with new Date and Date.now()"
        height="270px"
        width="720px"
        fixedWidth
      />
      {/* Console.clear */}
      {/* scrollTo */}
    </Box>
  );
}
