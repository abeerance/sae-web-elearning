import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbmelb1w0ej501ta0hqu8jx3/master',
  cache: new InMemoryCache(),
});

export default apolloClient;
