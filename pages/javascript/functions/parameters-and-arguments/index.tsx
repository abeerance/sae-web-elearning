import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { ImageWrapper } from '../../../../common/components/common/images/image-wrapper';
import { H1Text } from '../../../../common/components/common/typography/h1-text';
import { Paragraph } from '../../../../common/components/common/typography/paragraph';
import argsAndParamExample1 from '../../../common/javascript-assets/functions/args1.webp';
import argsAndParamExample2 from '../../../common/javascript-assets/functions/args2.webp';

export default function ParametersAndArguments() {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'inherit', flexDirection: 'column', maxWidth: '100%' }}>
      <H1Text title="Parameters and Arguments" hasMarginBottom />
      <Paragraph text={t(`functions.parametersArguments1`)} />
      <ImageWrapper
        source={argsAndParamExample1}
        description="Simple syntax example of a Function with two parameters"
        height="350px"
        width="600px"
        fixedWidth
        hasBottomDescription
      />
      <Paragraph text={t(`functions.parametersArguments2`)} />
      <Paragraph text={t(`functions.parametersArguments3`)} />
      <ImageWrapper
        source={argsAndParamExample2}
        description="Example on how parameters and arguments work with eachother"
        height="350px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t(`functions.parametersArguments4`)} />
      <Paragraph text={t(`functions.parametersArguments5`)} />
    </Box>
  );
}
