import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientGQL = new ApolloClient({
  uri: (`${process.env.REACT_APP_BASE_URL_}/graphql`),
  cache: new InMemoryCache(),
});

export default clientGQL;
