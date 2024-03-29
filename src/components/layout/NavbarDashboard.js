import styles from "./NavbarDashboard.module.css";

import avatar from "./img/avatar.png";

import { AiOutlineEdit } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsFillHandbagFill } from "react-icons/bs";

import { Link } from "react-router-dom";

import useDashboard from "../../hooks/useDashboard";

export default function NavbarDashboard() {
  const {
    myAccount,
    selectedProfile,
    selectedAdress,
    selectedChangePassword,
    triggerListProfile,
    triggerMyShopping,
    selectedItemDashboard,
  } = useDashboard();

  return (
    <div className={styles.container}>
      <div className={styles.boxUser}>
        <Link to="/my-account/profile">
          <div className={styles.peluciaAvatar}>
            <img src={avatar} alt="imagem de perfil" />
          </div>
        </Link>
        <div className={styles.profile}>
          <p className={styles.username}> Wesley Luis </p>
          <Link to="/my-account/profile">
            <p>
              <AiOutlineEdit /> Editar perfil
            </p>
          </Link>
        </div>
      </div>

      <div className={styles.listDashboard}>
        <nav className={styles.navBar}>
          <ul className={styles.list}>
            <li className={styles.item} onClick={triggerListProfile}>

              <span className={styles.sectionName}> <BiUser/> Minha Conta </span>
              {myAccount && (
                <ol>
                  <Link to="/my-account/profile">
                    <li
                      className={
                        !selectedProfile
                          ? styles.itemDashboard
                          : styles.itemDashboard_profile
                      }
                      onClick={() => selectedItemDashboard("profile")}
                    >
                      Perfil
                    </li>
                  </Link>
                  <Link to="/my-account/address">
                    <li
                      className={
                        !selectedAdress
                          ? styles.itemDashboard
                          : styles.itemDashboard_address
                      }
                      onClick={() => selectedItemDashboard("address")}
                    >
                      Endereços
                    </li>
                  </Link>
                  <Link to="/my-account/password">
                    <li
                      className={
                        !selectedChangePassword
                          ? styles.itemDashboard
                          : styles.itemDashboard_password
                      }
                      onClick={() => selectedItemDashboard("password")}
                    >
                      Trocar senha
                    </li>
                  </Link>
                </ol>
              )}
            </li>

            <li className={styles.item} onClick={triggerMyShopping}>

              <Link to="/my-account/purchase">
                <span className={styles.sectionName}> <BsFillHandbagFill /> Minhas compras </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
