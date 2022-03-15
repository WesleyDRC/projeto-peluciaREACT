import styles from "./Navbar.module.css";
import logo from "../../img/ursologo1.jpg";

import { Link } from "react-router-dom";
import { RiBearSmileLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
function Navbar() {
  return (
    <>
      <div className={styles.firstNavbar}>
        <nav>
          <ul className={styles.firstList}>
            <li className={styles.item}>
              <Link to="/"> Home </Link>
            </li>
            <li className={styles.item}>
              <Link to="/contact"> Contato </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.secondNavBar}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Pelucias Logo" />
          </Link>
        </div>

        <div className={styles.conteinerNavBar}>
          <Link to="/ursos-de-pelucia">
            <div className={styles.svg}>
              <RiBearSmileLine />
            </div>
            Ursos de Pelucia
          </Link>
        </div>

        <div className={styles.conteinerNavBar}>
          <Link to="/coracoes-de-pelucia">
            <div className={styles.svg}>
              <IoIosHeartEmpty />
            </div>
            Corações de Pelucia
          </Link>
        </div>
      </div>

      <div className={styles.aviso}>
        <p> Todos itens são entregues <br></br>apenas em <br></br><span>São José dos Campos!</span></p>
      </div>
    </>
  );
}

export default Navbar;
