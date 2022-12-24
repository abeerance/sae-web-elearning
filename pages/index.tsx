import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import WebappHome from './home';

const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <>
        <WebappHome />
      </>
    );
  }

  return <Link href="/api/auth/login">Login</Link>;
};

export default Home;
