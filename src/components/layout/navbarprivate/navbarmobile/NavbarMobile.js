import styles from "./NavbarMobile.module.css";

import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RiBearSmileLine } from "react-icons/ri";
import { GiRabbitHead } from "react-icons/gi";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../../img/ursologo1.jpg";

import graphqlRepository from "../../../../repository/graphqlRepository";
import { useQuery } from "@apollo/client";

import PlushWanted from "../../../PeluciaCard/PlushWanted";

import useAuth from "../../../../hooks/useAuth";

function NavbarMobile() {
  const [activatedButton, setActivatedButton] = useState(false);
  const [show, setShow] = useState(true);
  const [searchButton, setSearchButton] = useState(false);
  const [text, setText] = useState("");
  const [product, setProduct] = useState([]);
  const [erro, setErro] = useState(false);
  const GET_PLUSH = graphqlRepository.findAll();
  const { data, error } = useQuery(GET_PLUSH);
  const { SignOut } = useAuth();
  const navigate = useNavigate();

  const toggleActive = () => {
    setActivatedButton(!activatedButton);
    document.body.style.overflow = show ? "hidden" : "initial";
    setShow(!show);
  };
  const toggleOpenClosed = () => {
    setSearchButton(!searchButton);
    document.body.style.overflow = show ? "hidden" : "initial";
    setShow(!show);
  };

  const lowerText = text.toLowerCase();
  const filtrar = product.filter(({ name }) =>
    name.toLowerCase().includes(lowerText)
  );
  let handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    try {
      if (data) setProduct(data.findAll);
    } catch (e) {
      console.log(e);
      setErro(error);
    }
  }, [data, error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <nav className={styles.newNavBar}>
          <div
            id="menuSection"
            className={
              activatedButton
                ? styles.menu_section_menuActive
                : styles.menu_section
            }
            onClick={toggleActive}
          >
            <div className={styles.hamburguer}>
              <div id="menuToggle" className={styles.menu_toggle}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
              </div>
            </div>

            <nav
              className={
                activatedButton ? styles.menu_menuOpen : styles.menu_menuClose
              }
            >
              <div className={styles.conteinerNavBar}>
                <Link to="/filtro/urso">
                  <div className={styles.items_navbar}>
                    <div className={styles.svg}>
                      <RiBearSmileLine />
                    </div>
                    <div>
                      <p className={styles.nameP}> Ursos de Pelucia </p>
                    </div>
                  </div>
                </Link>

                <Link to="/filtro/coelho">
                  <div className={styles.items_navbar}>
                    <div className={styles.svg}>
                      <GiRabbitHead />
                    </div>
                    <div>
                      <p className={styles.nameP}> Coelho de Pelucia </p>
                    </div>
                  </div>
                </Link>
              </div>

              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link to="/"> Home </Link>
                </li>
                <li className={styles.item}>
                  <Link to="/contact"> Contato </Link>
                </li>
                <li className={styles.item}>
                  <Link to="/cart"> Carrinho </Link>
                </li>
                <li className={styles.item}>
                  <Link to="/my-account/profile"> Minha conta </Link>
                </li>
              </ul>

              <div className={styles.itemLeave}>
                  <button
                      title="SignOut"
                      type="submit"
                      className={styles.btn}
                      onClick={() => [SignOut(), navigate("/my-account")]}
                    >
                    Sair
                  </button>
              </div>
            </nav>
          </div>

          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="Pelucias Logo" />
            </Link>
          </div>

          <div
            className={
              searchButton
                ? styles.search_searchActive
                : styles.search_searchClose
            }
          >
            <div className={styles.btnSearch} onClick={toggleOpenClosed}>
              <BsSearch />
            </div>

            <div className={styles.containerButtonSearchActive}>
              <div className={styles.contentSearch}>
                <div className={styles.inputSearch}>
                  <input
                    type="search"
                    placeholder="Procurar pelúcia"
                    id="searchInput"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.btnSearch2} onClick={toggleOpenClosed}>
                  <Link to={`filtro/${text}`}>
                    <BsSearch />
                  </Link>
                </div>
                <div className={styles.close} onClick={toggleOpenClosed}>
                  <AiOutlineClose />
                </div>
              </div>

              <div className={styles.itemWantedMobile}>
                <ul
                  className={
                    text === "" || !searchButton
                      ? styles.container_listOff
                      : styles.container_listOn
                  }
                >
                  {text.length > 0 &&
                    product.length > 0 &&
                    filtrar.map((plush) => (
                      <li key={plush.id}>
                        <PlushWanted
                          id={plush.id}
                          name={plush.name}
                          imageUrl={plush.imageUrl}
                        />
                      </li>
                    ))}
                  {text.length > 0 && filtrar.length === 0 && (
                    <p className={styles.productNotFound}>
                      Produto não encontrado
                    </p>
                  )}
                  {erro && <p> Algo deu errado! Tente novamente. </p>}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavbarMobile;
