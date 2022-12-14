import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
  `${process && process.env.HYGRAPH_PROJECT_API}`,
);
hygraph.setHeader(
  'Authorization',
  `Bearer ${process && process.env.HYGRAPH_AUTH_TOKEN}`,
);

export default hygraph;
