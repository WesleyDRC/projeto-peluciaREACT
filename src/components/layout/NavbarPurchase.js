import styles from "./NavbarPurchase.module.css";

import { Link } from "react-router-dom";

import useDashboard from "../../hooks/useDashboard";

export default function NavbarPurchase() {

  const {
    selectedItemPurchase,
    itemAllSelected,
    itemPreparationSelected,
    itemWaySelected,
    itemConcludedSelected,
    itemCanceledSelected,
  } = useDashboard();

  return (
    <div className={styles.list}>
      <Link
        onClick={() => selectedItemPurchase("all")}
        className={itemAllSelected ? styles.itemSelected : styles.item  }
        to="/my-account/purchase/all"
      >
        <div>Tudo</div>
      </Link>

      <Link
        onClick={() => selectedItemPurchase("preparation")}
        className={itemPreparationSelected ? styles.itemSelected : styles.item}
        to="/my-account/purchase/preparation"
      >
        <div>Em preparação</div>
      </Link>

      <Link
        onClick={() => selectedItemPurchase("way")}
        className={itemWaySelected ? styles.itemSelected : styles.item}
        to="/my-account/purchase/way"
      >
        <div>A caminho</div>
      </Link>

      <Link
        onClick={() => selectedItemPurchase("concluded")}
        className={itemConcludedSelected ? styles.itemSelected : styles.item}
        to="/my-account/purchase/concluded"
      >
        <div>Conclúido</div>
      </Link>

      <Link
        onClick={() => selectedItemPurchase("canceled")}
        className={itemCanceledSelected ? styles.itemSelected : styles.item}
        to="/my-account/purchase/canceled"
      >
        <div>Cancelado</div>
      </Link>
    </div>
  );
}
