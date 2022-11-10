import WhatsApp from "./components/layout/WhatsApp";
import Routes from "./routes/index";
import clientGQL from "./services/clientGQL";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./contexts/auth";
import { BuyProvider } from "./contexts/buyFlow";
import { DashboardProvider } from './contexts/dashboard'

function App() {
  return (
    <>
        <ApolloProvider client={clientGQL}>
          <DashboardProvider>
            <AuthProvider>
              <BuyProvider>
                <WhatsApp />
                <Routes />
              </BuyProvider>
            </AuthProvider>
          </DashboardProvider>
        </ApolloProvider>
    </>
  );
}

export default App;
