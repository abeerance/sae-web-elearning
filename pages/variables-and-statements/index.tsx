import { Box } from '@mui/material';
import { t } from 'i18next';
import codeBlocksExample from '../../common/assets/variables-and-statements/code-blocks.webp';
import statementExample from '../../common/assets/variables-and-statements/statement.webp';
import varExample2 from '../../common/assets/variables-and-statements/var-let-const-2.webp';
import letExample from '../../common/assets/variables-and-statements/var-let-const-3.webp';
import constExample from '../../common/assets/variables-and-statements/var-let-const-4.webp';
import varLetConstExample from '../../common/assets/variables-and-statements/var-let-const-5.webp';
import varExample from '../../common/assets/variables-and-statements/var-let-const.js.webp';
import { ImageWrapper } from '../../common/components/common/images/image-wrapper';
import { H1Text } from '../../common/components/common/typography/h1-text';
import { H2Text } from '../../common/components/common/typography/h2-text';
import { Paragraph } from '../../common/components/common/typography/paragraph';

export default function VariablesAndStatements() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1024px',
      }}
    >
      <H1Text title="Variables and Statements" boxWidth={200} hasMarginBottom />
      <Paragraph text={t('variablesAndStatements.intro1')} />
      <Paragraph text={t('variablesAndStatements.intro2')} />
      <H2Text title="var, let, const" marginTop="4rem" hasMarginTop />
      <Paragraph text={t('variablesAndStatements.varLetConst1')} />
      <ImageWrapper
        source={varExample}
        description="An example on how to define a variable with var"
        height="200px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t('variablesAndStatements.varLetConst2')} />
      <Paragraph text={t('variablesAndStatements.varLetConst3')} />
      <ImageWrapper
        source={varExample2}
        description="Example how the console of a browser would look if we output something to the console.log()"
        height="200px"
        width="500px"
        fixedWidth
        hasBottomDescription
      />
      <Paragraph text={t('variablesAndStatements.varLetConst4')} />
      <ImageWrapper
        source={letExample}
        description="An example on how to define a variable with let"
        height="200px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t('variablesAndStatements.varLetConst5')} />
      <Paragraph text={t('variablesAndStatements.varLetConst6')} />
      <ImageWrapper
        source={constExample}
        description="An example on how to define a variable with const"
        height="200px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t('variablesAndStatements.varLetConst7')} />
      <Paragraph text={t('variablesAndStatements.varLetConst8')} />
      <ImageWrapper
        source={varLetConstExample}
        description="An example on how to redefine a variable and which variables throw errors"
        height="350px"
        width="600px"
        fixedWidth
      />
      <Paragraph text={t('variablesAndStatements.varLetConst9')} />
      <Paragraph text={t('variablesAndStatements.varLetConst10')} />
      <H2Text
        title="Statements and Semi-Colons in JavaScript"
        marginTop="5rem"
        hasMarginTop
      />
      <Paragraph text={t('variablesAndStatements.statements1')} />
      <Paragraph text={t('variablesAndStatements.statements2')} />
      <ImageWrapper
        source={statementExample}
        description="Explanation on how the semi-colon interacts with a JavaScript statement"
        height="220px"
        width="640px"
        fixedWidth
        hasBottomDescription
      />
      <H2Text title="Code Blocks" marginTop="3rem" hasMarginTop />
      <Paragraph text={t('variablesAndStatements.codeBlocks1')} />
      <ImageWrapper
        source={codeBlocksExample}
        description="Example of code-blocks in javascript"
        height="290px"
        width="650px"
        fixedWidth
      />
      <Paragraph text={t('variablesAndStatements.codeBlocks2')} />
    </Box>
  );
}
