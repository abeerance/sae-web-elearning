import { Box } from '@mui/material';
import { type NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { H1Text } from '../components/common/typography/h1-text';
import { H2Text } from '../components/common/typography/h2-text';
import { api } from '../utils/api';
import styles from './index.module.css';

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' });
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
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Create <span className={styles.pinkSpan}>T3</span> App
          </h1>
          <div className={styles.cardRow}>
            <Link
              className={styles.card}
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className={styles.cardTitle}>First Steps →</h3>
              <div className={styles.cardText}>
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className={styles.card}
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className={styles.cardTitle}>Documentation →</h3>
              <div className={styles.cardText}>
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className={styles.showcaseContainer}>
            <p className={styles.showcaseText}>
              {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
            </p>
            {/* <AuthShowcase /> */}
          </div>
          <button className={styles.loginButton} onClick={() => void signOut()}>
            Sign Out
          </button>
        </div>
      </main>
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
