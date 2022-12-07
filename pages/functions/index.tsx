import { Box } from '@mui/material';
import { t } from 'i18next';
import introExample from '../../common/assets/functions/intro1.webp';
import { ImageWrapper } from '../../common/components/common/images/image-wrapper';
import { NavigationLinks } from '../../common/components/common/navigation-links/navigation-links';
import { H1Text } from '../../common/components/common/typography/h1-text';
import { H2Text } from '../../common/components/common/typography/h2-text';
import { Paragraph } from '../../common/components/common/typography/paragraph';

export default function Functions() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '1024px' }}>
      <H1Text title="Functions and whatnot" boxWidth={150} hasMarginBottom />
      <Paragraph text={t('functions.intro1')} />
      <ImageWrapper
        source={introExample}
        description="Example of a function declaration"
        height="280px"
        width="700px"
        fixedWidth
      />
      <Paragraph text={t('functions.intro2')} />
      <Paragraph text={t('functions.intro3')} />
      <H2Text title="Modules in this topic" marginTop="4rem" hasMarginTop />
      <NavigationLinks topic="functions" subTopic="built-in" />
      <NavigationLinks topic="functions" subTopic="custom-functions" />
      <NavigationLinks
        topic="functions"
        subTopic="different-ways-to-declare-functions"
      />
    </Box>
  );
}
