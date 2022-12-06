import { Box } from '@mui/material';
import { t } from 'i18next';
import customFunctionExample1 from '../../common/assets/functions/custom1.webp';
import builtinExample1 from '../../common/assets/functions/function1.webp';
import dateNowExample from '../../common/assets/functions/function2.webp';
import consoleClearExample from '../../common/assets/functions/function3.webp';
import scrollToExample1 from '../../common/assets/functions/function4.webp';
import scrollToExample2 from '../../common/assets/functions/function5.webp';
import scrollToExample3 from '../../common/assets/functions/function6.gif';
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
      <Paragraph text={t('functions.builtin3')} />
      <ImageWrapper
        source={consoleClearExample}
        description="An example of console.clear() in JavaScript"
        height="400px"
        width="720px"
        fixedWidth
      />
      <Paragraph text={t('functions.builtin4')} />
      <Paragraph text={t('functions.builtin5')} />
      <ImageWrapper
        source={scrollToExample1}
        description="First example of scrollTo() in JavaScript"
        height="350px"
        width="720px"
        fixedWidth
      />
      <Paragraph text={t('functions.builtin6')} />
      <Paragraph text={t('functions.builtin7')} />
      <ImageWrapper
        source={scrollToExample2}
        description="second example of scrollTo() in JavaScript"
        height="280px"
        width="720px"
        fixedWidth
      />
      <Paragraph text={t('functions.builtin8')} />
      <Paragraph text={t('functions.builtin9')} />
      <ImageWrapper
        source={scrollToExample3}
        description="A basic example on how to use scrollTo in the console of the browser"
        height="850px"
        width="100%"
        fixedWidth
        hasBottomDescription
      />
      <H2Text title="Custom Functions" marginTop="3rem" hasMarginTop />
      <Paragraph text={t('functions.custom1')} />
      <ImageWrapper
        source={customFunctionExample1}
        description="Syntax example of a custom function"
        height="280px"
        width="720px"
        fixedWidth
        hasBottomDescription
      />
    </Box>
  );
}
