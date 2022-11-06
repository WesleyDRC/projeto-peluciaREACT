import styles from "./PeluciaCard.module.css";
import {Link} from 'react-router-dom';

import priceBRL from "../../utils/formatPrice";

function PeluciaCard({ id, name, price, imageUrl, size, measure }) {
  return (
    <Link to={`/product/${id}`} >
      <div className={styles.container}>
        <div className={styles.box} >
          <img src={imageUrl} alt="pelucia" />
          <h4 className={styles.name}>{name} - <span>{size}  {measure} </span></h4>
          <p className={styles.price}>R$ {priceBRL(price)} </p>
        </div>
      </div>
    </Link>

  );
}

export default PeluciaCard;
