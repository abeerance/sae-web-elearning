import { Box } from '@mui/material';
import { t } from 'i18next';
import customFunctionExample1 from '../../../../common/assets/javascript-assets/functions/custom1.webp';
import customFunctionExample2 from '../../../../common/assets/javascript-assets/functions/custom2.webp';
import customFunctionExample3 from '../../../../common/assets/javascript-assets/functions/custom3.webp';
import customFunctionExample4 from '../../../../common/assets/javascript-assets/functions/custom4.webp';
import { ImageWrapper } from '../../../common/components/common/images/image-wrapper';
import { H1Text } from '../../../common/components/common/typography/h1-text';
import { H2Text } from '../../../common/components/common/typography/h2-text';
import { Paragraph } from '../../../common/components/common/typography/paragraph';

export default function CustomFunctions() {
  return (
    <Box sx={{ display: 'inherit', flexDirection: 'column', width: '100%' }}>
      <H1Text title="Custom Functions" hasMarginBottom />
      <Paragraph text={t('functions.custom1')} />
      <ImageWrapper
        source={customFunctionExample1}
        description="Syntax example of a custom function"
        height="280px"
        width="700px"
        fixedWidth
        hasBottomDescription
      />
      <Paragraph text={t('functions.custom2')} />
      <Paragraph text={t('functions.custom3')} />
      <Paragraph text={t('functions.custom4')} />
      <ImageWrapper
        source={customFunctionExample2}
        description="Example on how to call a custom function in the code"
        height="260px"
        width="700px"
        fixedWidth
      />
      <Paragraph text={t('functions.custom5')} />
      <ImageWrapper
        source={customFunctionExample3}
        description="Return a specific value from a custom function"
        height="280px"
        width="700px"
        fixedWidth
      />
      <Paragraph text={t('functions.custom6')} />
      <H2Text
        title="Store a value returned from a function"
        marginTop="3rem"
        hasMarginTop
      />
      <Paragraph text={t('functions.custom7')} />
      <ImageWrapper
        source={customFunctionExample4}
        description="Return a specific value from a custom function"
        height="370px"
        width="700px"
        fixedWidth
      />
      <Paragraph text={t('functions.custom8')} />
      <Paragraph text={t('functions.custom9')} />
    </Box>
  );
}
