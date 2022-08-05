import styles from "./Navbar.module.css";
import logo from "../../img/ursologo1.jpg";

import { Link, useParams } from "react-router-dom";
import { RiBearSmileLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { GiRabbitHead } from 'react-icons/gi'

import { useEffect, useState } from "react";
import api from "../../services/api";
import "./NavbarMobile.css";
import debounce from "lodash/debounce";
import PlushWanted from "../PeluciaCard/PlushWanted";

function Navbar() {
  const [text, setText] = useState("");
  const [plush, setPlush] = useState([]);
  const [show, setShow] = useState(true);
  const [activatedButton, setActivatedButton] = useState(false);
  const [searchButton, setSearchButton] = useState(false);

  const toggleOpenClosed = () => {
    setSearchButton(!searchButton);
    setText("");
  };

  const toggleSearchBar = () => {
     setSearchButton(!searchButton);
  }

  const toggleSearchButton = () => {
    setSearchButton(!searchButton)
  }

  const toggleActive = () => {
    setActivatedButton(!activatedButton);
    document.body.style.overflow = show ? "hidden" : "initial";
    setShow(!show);
  };

  useEffect(() => {
    const getPlush = async () => {
      try {
        const response = await api.get("/products");
        setPlush(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPlush();
  }, []);

  const lowerText = text.toLowerCase();
  const filtrar = plush.filter(({ name }) =>
    name.toLowerCase().includes(lowerText)
  );

  let handleChange = (e) => {
    setText(e.target.value);
  };

  let { filtro } = useParams()
  let ssfiltro = filtro
  
  
  
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
            <div className={styles.inputsearch}>
              <input
                type="search"
                placeholder="Procurar pelúcia"
                id="searchInput"
                onChange={debounce(handleChange, 600)}
              ></input>

              <div className={styles.itemWanted} id="itemWanted">
                <ul
                  className={
                    text === ""
                      ? styles.container_listOff
                      : styles.container_listOn
                  }
                >
                  {text.length > 0 &&
                    plush.length > 0 &&
                    filtrar.map((plush) => (
                      <li key={plush.id}>
                        <PlushWanted
                          name={plush.name}
                          imageUrl={plush.imageUrl}
                        />
                      </li>
                    ))}
                </ul>
              </div>
            </div>
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
              <Link to="/filtro/urso">
                <div>
                  <div className={styles.svg}>
                    <RiBearSmileLine />
                  </div>
                  <p className={styles.nameP}> Ursos de Pelucia </p>
                </div>
              </Link>
            </div>

            <div className={styles.conteinerNavBar}>
              <Link to="/filtro/coelho">
                <div>
                  <div className={styles.svg}>
                    <GiRabbitHead />
                  </div>
                  <p className={styles.nameP}> Coelhos de Pelucia </p>
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
              className={
                activatedButton ? "menu_section menuActive" : "menu_section"
              }
              onClick={toggleActive}
            >
              <div className="hamburguer">
                <div id="menuToggle" className="menu_toggle">
                  <div className="one"></div>
                  <div className="two"></div>
                  <div className="three"></div>
                </div>
              </div>

              <nav
                className={activatedButton ? "menu menuOpen" : "menu menuClose"}
              >
                <div className={styles.conteinerNavBar}>
                  <Link to="/filtro/urso">
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
                  <Link to="/filtro/coelho">
                    <div className="items_navbar">
                      <div className={styles.svg}>
                        <GiRabbitHead />
                      </div>
                      <div>
                        <p className={styles.nameP}> Coelho de Pelucia </p>
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
              className={
                searchButton ? "search searchActive" : "search searchClose"
              }
              
            >
              <div className="btnSearch" onClick={toggleSearchBar}>
                <BsSearch />
              </div>

              <div className="containerButtonSearch">
                <div className="contentSearch">
                  <div className="inputSearch">
                    <input
                      type="search"
                      placeholder="Procurar pelúcia"
                      id="searchInput"
                      onChange={debounce(handleChange, 600)}
                    />
                  </div>
                  <div className="btnSearch2" onClick={toggleSearchButton}>
                    <Link to={`filtro/${ssfiltro}`}>
                      <BsSearch />
                    </Link>
                  </div>
                  <div className="close" onClick={toggleOpenClosed}>
                    <AiOutlineClose />
                  </div>
                </div>

                <div className="itemWantedMobile">
                  <ul
                    className={
                      text === "" ? "container_listOff" : "container_listOn"
                    }
                  >
                    {text.length > 0 &&
                      plush.length > 0 &&
                      filtrar.map((plush) => (
                        <li key={plush.id}>
                          <PlushWanted
                            name={plush.name}
                            imageUrl={plush.imageUrl}
                          />
                        </li>
                      ))}
                  </ul>
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
