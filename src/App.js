import WhatsApp from "./components/layout/WhatsApp";
import Rotas from "./routes";
import { client } from "./services/clientGQL";
import { ApolloProvider } from "@apollo/client";
function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <WhatsApp />
        <Rotas />
      </ApolloProvider>
    </>
  );
}

export default App;
