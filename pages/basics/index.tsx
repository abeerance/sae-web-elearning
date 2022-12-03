import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { H1Text } from '../../common/components/common/typography/h1-text';
import { H2Text } from '../../common/components/common/typography/h2-text';
import { Paragraph } from '../../common/components/common/typography/paragraph';

export default function Basics() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '50%' }}>
        <H1Text title="Welcome" boxWidth={100} />
        <Box sx={{ marginY: '5rem' }}>
          <Paragraph text={t('basics.intro1')} />
          <Paragraph text={t('basics.intro2')} />
          <Paragraph text={t('basics.intro3')} />
        </Box>
        <Box sx={{ marginBottom: '8rem' }}>
          <Paragraph text={t('basics.usecase1')} />
          <Paragraph text={t('basics.usecase2')} />
          <Paragraph text={t('basics.usecase3')} />
          <Paragraph text={t('basics.usecase4')} />
        </Box>
        <H1Text title="Editor and Terminal Setup" boxWidth={100} />
        <Paragraph text="In this section we will briefly go through your choices of terminal, if Node.js and npm are installed, some command line basics as well a quick intro to the recommended editor setup" />
        <Box sx={{ margin: '5rem 0 2rem' }}>
          <H2Text title="Your terminal of choice" />
        </Box>
        <Box>
          <Paragraph text="You can use the built in terminal application which on a Mac you can find under Applications > Utilities > Terminal." />
          <Paragraph text="I myself am a big fan of the terminal called iTerm, but in the end, they all have the same use case" />
          <Paragraph text="On Windows, the terminal is called Command Prompt. You can access this by going to Start > All Programs > Accessories > Command Prompt. There is another terminal for Windows called Cmder." />
        </Box>
        <Box sx={{ margin: '5rem 0 2rem' }}>
          <H2Text title="Node.js" />
        </Box>
        <Box>
          <Paragraph text="Next up, we need Node.js. In order to install Node.js, go to https://nodejs.org and install the latest version." />
          <Paragraph text="Install the LTS Version of Node.js, since this is the most stable version." />
          <Paragraph text="We will primarily use Node.js for its tooling, bundling, formatting, etc. So for our sanity we will go ahead and install it" />
        </Box>
      </Box>
    </Box>
  );
}
