import WhatsApp from "./components/layout/WhatsApp";
import Rotas from "./routes";
import clientGQL from "./services/clientGQL";
import { ApolloProvider } from "@apollo/client";
function App() {
  return (
    <>
      <ApolloProvider client={clientGQL}>
        <WhatsApp />
        <Rotas />
      </ApolloProvider>
    </>
  );
}

export default App;
