import { createContext, useState } from "react";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {

  const [myAccount, setMyAccount] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(false);
  const [selectedAdress, setSelectedAdress] = useState(false);
  const [selectedChangePassword, setSelectedChangePassword] = useState(false);

  const triggerListProfile = () => {
    setMyAccount(true);
  };
  const triggerMyShopping = () => {
    setMyAccount(false);
  };

  const selectedItemDashboard = (item) => {
    if (item === "perfil") {
      setSelectedChangePassword(false);
      setSelectedAdress(false);
      setSelectedProfile(true);
    }
    if (item === "enderecos") {
      setSelectedChangePassword(false);
      setSelectedProfile(false);
      setSelectedAdress(true);
    }
    if (item === "trocarsenha") {
      setSelectedAdress(false);
      setSelectedProfile(false);
      setSelectedChangePassword(true);
    }
  };

  return (
    <DashboardContext.Provider
      value={{ myAccount, selectedProfile, selectedAdress, selectedChangePassword, triggerListProfile, triggerMyShopping, selectedItemDashboard}}
    >
      {children}
    </DashboardContext.Provider>
  );
};
