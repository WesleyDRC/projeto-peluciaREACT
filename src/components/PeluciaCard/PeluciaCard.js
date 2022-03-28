import styles from "./PeluciaCard.module.css";
import Urso from "../../img/coelho1.png";
import Urso1 from "../../img/coelho2.png";
import Urso2 from "../../img/coelho3.png";


function PeluciaCard({ name, price, imageUrl, size,measure }) {
  return (
    <div className={styles.container}>
      <div className={styles.box} id="box1">
        <h4>{name}</h4>
        <p> {price} </p>
        <img src={imageUrl} />
        <p> {size} <span> {measure} </span></p>
      </div>
    </div>
  );
}

export default PeluciaCard;
