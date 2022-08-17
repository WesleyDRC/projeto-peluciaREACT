import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URL_,
  cache: new InMemoryCache(),
});
