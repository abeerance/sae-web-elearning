import { Box } from '@mui/material';
import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { H1Text } from '../components/common/typography/h1-text';
import { H2Text } from '../components/common/typography/h2-text';
const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return sessionData ? (
    <>
      <Head>
        <title>SAE Web E-Learning</title>
        <meta
          name="description"
          content="E-Learning knowledgebase for SAE web students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
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
          margin: '0',
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
