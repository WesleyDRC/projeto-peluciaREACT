import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import styles from "./Contato.module.css";

function Contato() {
  return (
    <>
      <div className={styles.contato}>
        <h1> Contatos </h1>
        <Link to="/">
          <p>
            <ImWhatsapp /> <span> (12) 98835-7075 </span>{" "}
          </p>
        </Link>
      </div>

      <div className={styles.social}>
        <p> Mídias Socias</p>
        <div className={styles.container}>
          <ul className={styles.social_list}>
            <li>
              <Link to="/">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contato;
