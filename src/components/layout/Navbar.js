import styles from "./Navbar.module.css";
import logo from "../../img/ursologo1.jpg";

import { Link } from "react-router-dom";
import { RiBearSmileLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
function Navbar() {
  return (
    <header>
      <div className={styles.container}>
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
      </div>

      <div className={styles.container}>
        <div className={styles.secondNavBar}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Pelucias Logo" />
            </Link>
          </div>

          <div className={styles.conteinerNavBar}>
            <Link to="/ursos-de-pelucia">
              <div>
                <div className={styles.svg}>
                  <RiBearSmileLine />
                </div>
                Ursos de Pelucia
              </div>
            </Link>
          </div>
          
          <div className={styles.conteinerNavBar}>
          <Link to="/coracoes-de-pelucia">
            <div>
              <div className={styles.svg}>
                <IoIosHeartEmpty />
              </div>
              Corações de Pelucia
            </div>
          </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Navbar;
