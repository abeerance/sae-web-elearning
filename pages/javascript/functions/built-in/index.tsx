import { Box } from '@mui/material';
import { t } from 'i18next';
import { ImageWrapper } from '../../../../common/components/common/images/image-wrapper';
import { H1Text } from '../../../../common/components/common/typography/h1-text';
import { Paragraph } from '../../../../common/components/common/typography/paragraph';
import builtinExample1 from '../../../common/javascript-assets/functions/function1.webp';
import dateNowExample from '../../../common/javascript-assets/functions/function2.webp';
import consoleClearExample from '../../../common/javascript-assets/functions/function3.webp';
import scrollToExample1 from '../../../common/javascript-assets/functions/function4.webp';
import scrollToExample2 from '../../../common/javascript-assets/functions/function5.webp';
import scrollToExample3 from '../../../common/javascript-assets/functions/function6.gif';

export default function BuiltInFunctions() {
  return (
    <Box sx={{ display: 'inherit', flexDirection: 'column', width: '100%' }}>
      <H1Text title="Built-In Functions" hasMarginBottom />
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
    </Box>
  );
}
