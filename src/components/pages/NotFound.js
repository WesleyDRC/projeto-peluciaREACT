import styles from "./NotFound.module.css";
import imageError404 from "../../img/peluciaerror404.png";
function NotFound({ value }) {
  return (
    <div className={styles.containerNotFound}>
      <div className={styles.box}>
        <div className={styles.text}>
          <h1 className={styles.h1}>Não há resultados para </h1>
          <p className={styles.value}>{value} </p>
        </div>
        <div className={styles.image}>
          <img className={styles.img} src={imageError404} alt="error 404" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
