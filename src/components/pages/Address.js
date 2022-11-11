import { useEffect } from "react";

import {IoAddOutline} from 'react-icons/io5'

import NavbarDashboard from "../layout/NavbarDashboard";
import styles from "./Address.module.css";

import useDashboard from "../../hooks/useDashboard";

export default function Address() {
  const { setMyAccount, setSelectedAdress } = useDashboard();

  useEffect(() => {
    setMyAccount(true);
    setSelectedAdress(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navbarDashboard}>
        <NavbarDashboard />
      </div>

      <div className={styles.pages}>
        <div className={styles.address}>
          <div className={styles.section}>
            <div>
              <h1 className={styles.title}> Meus endereços </h1>
            </div>
            <div>
              <button className={styles.btn}> <IoAddOutline className={styles.svg}/> Inserir novo endereço </button>
            </div>
          </div>

          <div className={styles.AddressContainer}>
            <p> Não há nenhum endereço cadastrado.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
