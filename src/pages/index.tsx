import { Box } from '@mui/material';
import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { H1Text } from '../components/common/typography/h1-text';
import { H2Text } from '../components/common/typography/h2-text';
import { Paragraph } from '../components/common/typography/paragraph';

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return sessionData ? (
    <Box sx={{ width: '100%' }}>
      <H1Text text={`Hey ${sessionData.user.name}!`} hasMarginBottom />
      <Paragraph
        text="Welcome to the SAE Institute Zurich's JavaScript, TypeScript, and React knowledgebase! We are thrilled to have you as a student and eager to help you build a strong foundation in these cutting-edge technologies."
        hasMarginBottom
      />
      <Paragraph
        text="JavaScript is a powerful, dynamic programming language used to add interactivity and other dynamic elements to websites. TypeScript is a statically-typed superset of JavaScript that provides optional type checking and other features to help you write more maintainable code. React is a popular JavaScript library for building user interfaces."
        hasMarginBottom
      />
      <Paragraph
        text="Here, you'll find a wealth of resources and information about these technologies, including articles, tutorials, and reference materials. Our goal is to provide you with a comprehensive understanding of the concepts and practices you need to be successful in this field."
        hasMarginBottom
      />
      <Paragraph
        text="In the future, we will also be adding exercises and challenges to help you practice what you've learned and solidify your skills. Whether you're just starting out or looking to deepen your expertise, we have something for everyone."
        hasMarginBottom
      />
      <Paragraph
        text="We encourage you to explore the site and take advantage of all that it has to offer. If you have any questions or need help along the way, please don't hesitate to reach out to us. We're here to support you every step of the way."
        hasMarginBottom
      />
      <Paragraph
        text="We're excited to see what you can accomplish and look forward to helping you on your journey to becoming a JavaScript, TypeScript, and React expert!"
        hasMarginBottom
      />
    </Box>
  ) : (
    <>
      <Head>
        <title>SAE Web E-Learning</title>
        <meta
          name="description"
          content="E-Learning knowledgebase for SAE web students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="main"
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(to bottom, #1A2238, #0f1021)',
        }}
      >
        <H1Text text="Seems like you are not logged in yet" hasMarginBottom />
        <H2Text text="Login with your discord account so that you can see the content" />
        <Box
          sx={{
            marginTop: '40px',
            borderRadius: '9999px',
            padding: '0.75rem 2.5rem',
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
          }}
          component="button"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          Sign in with Discord
        </Box>
      </Box>
    </>
  );
};

export default Home;
