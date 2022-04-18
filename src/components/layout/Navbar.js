import styles from "./Navbar.module.css";
import logo from "../../img/ursologo1.jpg";

import { Link } from "react-router-dom";
import { RiBearSmileLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

import "./NavbarMobile.css";

function Navbar() {
  const [show, setShow] = useState(true);
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(false);
  const toggleSearch = () => {
    setSearch(!search);

    document.body.style.overflow = show ? "hidden" : "initial";
    setShow(!show);
  };
  const toggleActive = () => {
    setActive(!active);

    document.body.style.overflow = show ? "hidden" : "initial";
    setShow(!show);
  };

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
                  <p className={styles.nameP}> Ursos de Pelucia </p>
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

      <div className={styles.container}>
        <div className={styles.content}>
          <nav className={styles.newNavBar}>
            <div
              id="menuSection"
              className={active ? "menu_section menuActive" : "menu_section"}
              onClick={toggleActive}
            >
              <div className="hamburguer">
                <div id="menuToggle" className="menu_toggle">
                  <div className="one"></div>
                  <div className="two"></div>
                  <div className="three"></div>
                </div>
              </div>

              <nav className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className={styles.conteinerNavBar}>
                  <Link to="/ursos-de-pelucia">
                    <div className="items_navbar">
                      <div className={styles.svg}>
                        <RiBearSmileLine />
                      </div>
                      <div>
                        <p className={styles.nameP}> Ursos de Pelucia </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className={styles.conteinerNavBar}>
                  <Link to="/coracoes-de-pelucia">
                    <div className="items_navbar">
                      <div className={styles.svg}>
                        <IoIosHeartEmpty />
                      </div>
                      <div>
                        <p className={styles.nameP}> Corações de Pelucia </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <ul className="list">
                  <li className="item">
                    <Link to="/"> Home </Link>
                  </li>
                  <li className="item">
                    <Link to="/contact"> Contato </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="Pelucias Logo" />
              </Link>
            </div>

            <div
              className={search ? "search searchActive" : "search searchClose"}
            >
              <div className="btnSearch" onClick={toggleSearch}>
                <BsSearch />
              </div>

              <div className="contentSearch">
                <div className="inputSearch">
                  <input type="search" placeholder="Procurar pelúcia" />
                </div>
                <div className="btnSearch2">
                  <BsSearch />
                </div>
                <div className="close" onClick={toggleSearch}>
                  <AiOutlineClose />
                </div>
              </div>

            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

{
  /* <div className="btnSearch2">
<div className="contentSearch">
  <ul>
    <li>
      <BsSearch />
      <AiOutlineClose />
    </li>
    <li>
      <input type="search" placeholder="Procurar pelúcia" />
    </li>
  </ul>
</div>
</div> */
}
