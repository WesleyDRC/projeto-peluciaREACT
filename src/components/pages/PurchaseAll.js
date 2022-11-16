import styles from "./Purchase.module.css";

import { useEffect } from "react";

import NavbarDashboard from "../layout/NavbarDashboard";
import NavbarPurchase from "../layout/NavbarPurchase";

import useDashboard from "../../hooks/useDashboard";

export default function PurchaseAll () {

  const {selectedItemPurchase} = useDashboard()

  useEffect(() => {
    selectedItemPurchase("all")
  }, [selectedItemPurchase])

  return (
    <div className={styles.container}>
      <div className={styles.navbarDashboard}>
        <NavbarDashboard />
      </div>

      <div className={styles.pages}>
        <div className={styles.purchase}>
          <div className={styles.section}>
            <h1 className={styles.title}> Compras </h1>
          </div>

					<NavbarPurchase />

        </div>
      </div>
    </div>
  );
}
