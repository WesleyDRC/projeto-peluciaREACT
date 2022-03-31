import styles from "./Navbar.module.css";
import logo from "../../img/ursologo1.jpg";

import { Link } from "react-router-dom";
import { RiBearSmileLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
function Navbar() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.firstNavbar}>
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
        <div className={styles.content}>
          <nav className={styles.secondNavBar}>
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
                  <p className={styles.nameP}>  Ursos de Pelucia </p>
                </div>
              </Link>
            </div>

            <div className={styles.conteinerNavBar}>
              <Link to="/coracoes-de-pelucia">
                <div>
                  <div className={styles.svg}>
                    <IoIosHeartEmpty />
                  </div>
                  <p className={styles.nameP}> Corações de Pelucia </p>
                  
                </div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
