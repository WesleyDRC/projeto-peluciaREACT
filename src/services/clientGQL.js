import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://plush-backend-dev.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
