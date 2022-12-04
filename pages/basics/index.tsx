import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import basics1 from '../../common/assets/basics/basics-1.webp';
import nodeVersion from '../../common/assets/basics/nodev.webp';
import packageManagers from '../../common/assets/basics/package-managers.webp';
import thinkingImage from '../../common/assets/basics/thinking.webp';
import { DownloadButton } from '../../common/components/common/buttons/download-button';
import { ImageWrapper } from '../../common/components/common/images/image-wrapper';
import { H1Text } from '../../common/components/common/typography/h1-text';
import { H2Text } from '../../common/components/common/typography/h2-text';
import { Paragraph } from '../../common/components/common/typography/paragraph';
import { collapsed } from '../_app';

export default function Basics() {
  const { t } = useTranslation();
  const [navCollapsed] = useAtom(collapsed);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1024px',
      }}
    >
      <H1Text title="Welcome" boxWidth={100} />
      <Paragraph text={t('basics.intro1')} />
      <Paragraph text={t('basics.intro2')} />
      <Paragraph text={t('basics.intro3')} />
      <ImageWrapper
        source={basics1}
        description="Example of a picture"
        height={`${
          navCollapsed
            ? 'calc(100px + (600 - 100) * ((100vw - 300px) / (1600 - 300)))'
            : 'calc(100px + (600 - 100) * ((100vw - 300px) / (1600 - 300)))'
        } `}
        hasMinHeight
      />
      <Box sx={{ marginBottom: '8rem' }}>
        <Paragraph text={t('basics.usecase1')} />
        <Paragraph text={t('basics.usecase2')} />
        <Paragraph text={t('basics.usecase3')} />
        <Paragraph text={t('basics.usecase4')} />
      </Box>
      <H1Text title="Editor and Terminal Setup" boxWidth={100} />
      <Paragraph text={t('basics.terminalIntro')} hasMargin />
      <H2Text title="Your terminal of choice" marginTop="5rem" hasMarginTop />
      <ImageWrapper
        source={thinkingImage}
        description="It's always hard to figure out which tools you are going to use"
        height={`${
          navCollapsed
            ? 'calc(100px + (600 - 100) * ((100vw - 300px) / (1600 - 300)))'
            : 'calc(100px + (600 - 100) * ((100vw - 300px) / (1600 - 300)))'
        } `}
        hasMinHeight
        hasBottomDescription
      />
      <Paragraph text={t('basics.terminal1')} />
      <Paragraph text={t('basics.terminal2')} />
      <DownloadButton
        title="Download iTerm"
        url="https://iterm2.com/downloads/stable/latest"
      />
      <Paragraph text="On Windows, the terminal is called Command Prompt. You can access this by going to Start > All Programs > Accessories > Command Prompt. There is another terminal for Windows called Cmder." />
      <H2Text title="Node.js" marginTop="5rem" hasMarginTop />
      <Paragraph text={t('basics.nodejs1')} />
      <DownloadButton
        title="Download Node.js"
        url="https://nodejs.org/en/download/"
        openTab
      />
      <Paragraph text="We will primarily use Node.js for its tooling, bundling, formatting, etc. So for our sanity we will go ahead and install it" />
      <H2Text
        title="Check if Node.js is installed"
        marginTop="5rem"
        hasMarginTop
      />
      <Paragraph text={t('basics.nodejs2')} />
      <ImageWrapper
        source={nodeVersion}
        description="Image of terminal how to check node Version"
        height="270px"
        width="560px"
        fixedWidth
      />
      <H2Text title="NPM, PNPM or Yarn?" marginTop="5rem" hasMarginTop />
      <Paragraph text={t('basics.npm1')} />
      <ImageWrapper
        source={packageManagers}
        description="Explanation how to install the different package managers"
        height="350px"
        width="630px"
        fixedWidth
      />
    </Box>
  );
}
