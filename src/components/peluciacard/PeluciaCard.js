import styles from "./peluciaCard.module.css";
import Urso from "../../img/urso1.png";
import Urso1 from '../../img/urso2.png';
import Urso2 from '../../img/mickey.png';
function PeluciaCard() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.text}>
          <h2> Coelho - 30cm</h2>
          <p> R$ 39,90 </p>
          <div className={styles.btn}>
            <a href="#"> COMPRAR </a>
          </div>
        </div>
        <div className={styles.imagem}>
          <img src={Urso} />
        </div>
      </div>

      <div className={styles.box2}>
        <div className={styles.text}>
          <h2> Urso - 30cm</h2>
          <p> R$ 39,90 </p>
          <div className={styles.btn}>
            <a href="#"> COMPRAR </a>
          </div>
        </div>
        <div className={styles.imagem}>
          <img src={Urso1} />
        </div>
      </div>

      <div className={styles.box3}>
        <div className={styles.text}>
          <h2> Mickey - 30cm</h2>
          <p> R$ 39,90 </p>
          <div className={styles.btn}>
            <a href="#"> COMPRAR </a>
          </div>
        </div>
        <div className={styles.imagem}>
          <img src={Urso2} />
        </div>
      </div>
    </div>
  );
}

export default PeluciaCard;
