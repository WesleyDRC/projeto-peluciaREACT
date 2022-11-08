import styles from "./NavbarDashboard.module.css";

import avatar from "./img/avatar.png";

import { AiOutlineEdit } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsFillHandbagFill } from "react-icons/bs";

import { Link } from "react-router-dom";

import { useState } from "react";

export default function NavbarDashboard() {
  const [myAccount, setMyAccount] = useState(false);

  const triggerListProfile = () => {
    setMyAccount(true);
  };
	const triggerMyShopping = () => {
		setMyAccount(false)
	}

  return (
    <div className={styles.container}>
      <div className={styles.boxUser}>
        <Link to="/">
          <div className={styles.peluciaAvatar}>
            <img src={avatar} />
          </div>
        </Link>
        <div className={styles.profile}>
          <p className={styles.username}> Wesley Luis </p>
          <Link to="/">
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
              <BiUser />
              <span className={styles.sectionName}> Minha Conta </span>
              {myAccount && (
                <ol>
                  <li>Perfil</li>
                  <li>Endereços</li>
                  <li>Trocar senha</li>
                </ol>
              )}
            </li>

            <li className={styles.item} onClick={triggerMyShopping}>
              <BsFillHandbagFill />
              <span className={styles.sectionName}> Minhas compras </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
