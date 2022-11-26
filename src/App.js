import WhatsApp from "./components/layout/WhatsApp";
import Routes from "./routes/index";
import clientGQL from "./services/clientGQL";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./contexts/auth";
import { BuyProvider } from "./contexts/buyFlow";
import { DashboardProvider } from "./contexts/dashboard";

function App() {
  return (
    <>
      <AuthProvider>
        <ApolloProvider client={clientGQL}>
          <DashboardProvider>
            <BuyProvider>
              <WhatsApp />
              <Routes />
            </BuyProvider>
          </DashboardProvider>
        </ApolloProvider>
      </AuthProvider>
    </>
  );
}

export default App;
