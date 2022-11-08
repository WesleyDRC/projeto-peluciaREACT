import WhatsApp from "./components/layout/WhatsApp";
import Routes from "./routes/index";
import clientGQL from "./services/clientGQL";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./contexts/auth";
import { BuyProvider } from "./contexts/buyFlow";

function App() {
  return (
    <>
        <ApolloProvider client={clientGQL}>
          <AuthProvider>
            <BuyProvider>
              <WhatsApp />
              <Routes />
            </BuyProvider>
          </AuthProvider>
        </ApolloProvider>
    </>
  );
}

export default App;
