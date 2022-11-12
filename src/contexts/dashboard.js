import { createContext, useState } from "react";

export const DashboardContext = createContext({});

export const DashboardProvider = ({ children }) => {
  const [myAccount, setMyAccount] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(false);
  const [selectedAdress, setSelectedAdress] = useState(false);
  const [selectedChangePassword, setSelectedChangePassword] = useState(false);

  const [itemAllSelected, setItemAllSelected] = useState(false);
  const [itemPreparationSelected, setItemPreparationSelected] = useState(false);
  const [itemWaySelected, setItemWaySelected] = useState(false);
  const [itemConcludedSelected, setItemConcludedSelected] = useState(false);
  const [itemCanceledSelected, setItemCanceledSelected] = useState(false);

  const triggerListProfile = () => {
    setMyAccount(true);
  };
  const triggerMyShopping = () => {
    setMyAccount(false);
  };

  const selectedItemDashboard = (item) => {
    if (item === "profile") {
      setSelectedChangePassword(false);
      setSelectedAdress(false);
      setSelectedProfile(true);
    }
    if (item === "address") {
      setSelectedChangePassword(false);
      setSelectedProfile(false);
      setSelectedAdress(true);
    }
    if (item === "password") {
      setSelectedAdress(false);
      setSelectedProfile(false);
      setSelectedChangePassword(true);
    }
  };

  const selectedItemPurchase = (item) => {
    if (item === "all") {
      setItemPreparationSelected(false);
      setItemWaySelected(false);
      setItemConcludedSelected(false);
      setItemCanceledSelected(false);
      setItemAllSelected(true);
    }
    if (item === "preparation") {
      setItemAllSelected(false);
      setItemWaySelected(false);
      setItemConcludedSelected(false);
      setItemCanceledSelected(false);
      setItemPreparationSelected(true);
    }
    if (item === "way") {
      setItemAllSelected(false);
      setItemPreparationSelected(false);
      setItemConcludedSelected(false);
      setItemCanceledSelected(false);
      setItemWaySelected(true);
    }
    if (item === "concluded") {
      setItemAllSelected(false);
      setItemPreparationSelected(false);
      setItemWaySelected(false);
      setItemCanceledSelected(false);
      setItemConcludedSelected(true);
    }
    if (item === "canceled") {
      setItemPreparationSelected(false);
      setItemWaySelected(false);
      setItemConcludedSelected(false);
      setItemAllSelected(false);
      setItemCanceledSelected(true);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        myAccount,
        selectedProfile,
        selectedAdress,
        selectedChangePassword,
        triggerListProfile,
        triggerMyShopping,
        selectedItemDashboard,
        setMyAccount,
        setSelectedProfile,
        setSelectedAdress,
        setSelectedChangePassword,
        itemAllSelected,
        itemPreparationSelected,
        itemWaySelected,
        itemConcludedSelected,
        itemCanceledSelected,
        selectedItemPurchase
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
