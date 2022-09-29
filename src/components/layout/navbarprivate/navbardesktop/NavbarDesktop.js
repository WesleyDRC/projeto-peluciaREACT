import styles from "./NavbarDesktop.module.css";
import "../navbarmobile/NavbarMobile.module.css";
import logo from "../../../../img/ursologo1.jpg";

import { Link } from "react-router-dom";
import { RiBearSmileLine } from "react-icons/ri";
import { GiRabbitHead } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

import { useEffect, useState } from "react";

import PlushWanted from "../../../PeluciaCard/PlushWanted";
import graphqlRepository from "../../../../repository/graphqlRepository";

import { useQuery } from "@apollo/client";

function NavbarDesktop() {
  const [text, setText] = useState("");
  const [product, setProduct] = useState([]);
  const [erro, setErro] = useState(false);

  const GET_PLUSH = graphqlRepository.findAll();
  const { data, error } = useQuery(GET_PLUSH);

  useEffect(() => {
    try {
      if (data) setProduct(data.findAll);
    } catch (e) {
      console.log(e);
      setErro(error);
    }
  }, [data, error]);

  const lowerText = text.toLowerCase();
  const filtrar = product.filter(({ name }) =>
    name.toLowerCase().includes(lowerText)
  );

  let handleChange = (e) => {
    setText(e.target.value);
  };

  const searchNow = (e) => {
    if (e.charCode === 13) {
      const btn = document.querySelector("#searchInput");
      btn.click();
    }
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
            <div className={styles.inputsearch}>
              <form action={`/filtro/${text}`}>
                <input
                  type="search"
                  placeholder="Procurar pelúcia"
                  id="searchInput"
                  onChange={handleChange}
                  required
                  onKeyPress={searchNow}
                ></input>
              </form>

              <div className={styles.itemWanted} id="itemWanted">
                <ul
                  className={
                    text === ""
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
            <div className={styles.cart}>
              <Link to="/cart">
                <p> <IoMdCart /> </p>
              </Link>
            </div>
            <div className={styles.auth}>
              <Link to="/my-account">
                <FaUser />
                <span> Minha conta </span>
              </Link>
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


    </header>
  );
}

export default NavbarDesktop;
