import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from './urls';

const httpLink = new HttpLink({
  uri: `${API_URL}`,
  credentials: 'same-origin',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
