import { gql } from '@apollo/client';
import apolloClient from '../../apollo-client';

export async function getServerSideProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query JavaScriptModules {
        javaScriptModules {
          module
          content {
            html
          }
        }
      }
    `,
  });

  return {
    props: {
      modules: data.javaScriptModules[0],
    },
  };
}

export default function JavaScriptModule({ modules }: { modules: {} }) {
  console.log(modules);
  return (
    <>
      <></>
    </>
  );
}
