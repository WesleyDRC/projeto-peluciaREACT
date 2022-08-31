import WhatsApp from "./components/layout/WhatsApp";
import Routes from "./routes/index";
import clientGQL from "./services/clientGQL";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <>
      <ApolloProvider client={clientGQL}>
        <AuthProvider>
          <WhatsApp />
          <Routes />
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
