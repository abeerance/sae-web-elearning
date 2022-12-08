import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { H1Text } from '../../../common/components/common/typography/h1-text';
import { H2Text } from '../../../common/components/common/typography/h2-text';
import { Paragraph } from '../../../common/components/common/typography/paragraph';
import differentWaysExample1 from '../../../common/assets/functions/different1.webp';
import differentWaysExample2 from '../../../common/assets/functions/different2.webp';
import differentWaysExample3 from '../../../common/assets/functions/different3.webp';
import differentWaysExample4 from '../../../common/assets/functions/different4.webp';
import differentWaysExample5 from '../../../common/assets/functions/different5.webp';
import { ImageWrapper } from '../../../common/components/common/images/image-wrapper';

export default function DifferentWaysToDeclareFunctions() {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'inherit', flexDirection: 'column', maxWidth: '100%' }}>
      <H1Text title="Different ways to declare Functions" hasMarginBottom />
      <Paragraph text={t(`functions.differentWays1`)} />
      <H2Text title="Anonymous Functions" marginTop="4rem" hasMarginTop />
      <Paragraph text={t(`functions.differentWays2`)} />
      <ImageWrapper
        source={differentWaysExample1}
        description="An example of an anonymous function"
        height="280px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t(`functions.differentWays3`)} />
      <H2Text title="Function Expressions" marginTop="4rem" hasMarginTop />
      <Paragraph text={t(`functions.differentWays4`)} />
      <ImageWrapper
        source={differentWaysExample2}
        description="An example of a function expression"
        height="350px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t(`functions.differentWays5`)} />
      <H2Text
        title="Difference between a Function Declaration and a Function Expression"
        marginTop="4rem"
        hasMarginTop
      />
      <Paragraph text={t(`functions.differentWays6`)} />
      <Paragraph text={t(`functions.differentWays7`)} />
      <ImageWrapper
        source={differentWaysExample3}
        description="A basic example of a hoisted Function Declaration"
        height="300px"
        width="600px"
        fixedWidth
        hasBottomDescription
      />
      <Paragraph text={t(`functions.differentWays8`)} />
      <ImageWrapper
        source={differentWaysExample4}
        description="An example on how a Function Expression throws an error because it's not hoisted"
        height="280px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t(`functions.differentWays9`)} />
      <ImageWrapper
        source={differentWaysExample5}
        description="An example of an error when trying to declare a Named Function using a Function Expression"
        height="280px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t(`functions.differentWays10`)} />
    </Box>
  );
}
