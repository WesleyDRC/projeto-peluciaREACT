import { IoLocationOutline } from 'react-icons/io5';
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./Contato.module.css";

function Contato() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> Contatos </h1>
      </div>
      <div className={styles.contato}>
        <ul className={styles.listInfo}>
          <li className={styles.item}>
            <div className={styles.content}>
              <div className={styles.svg}>
                <ImWhatsapp />
              </div>
              <div className={styles.info}>
                <h3> WHATSAPP</h3>
                <p> Luciene <span>(12) 98835-7075</span> </p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <div className={styles.svg}>
                <HiOutlineMail />
              </div>
              <div className={styles.info}>
                <h3> EMAIL </h3>
                <p> wesleymiranda04b@gmail.com </p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.content}>
              <div className={styles.svg}>
              <IoLocationOutline />
              </div>
              <div className={styles.info}>
                <h3> LOCALIZAÇÃO </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contato;
