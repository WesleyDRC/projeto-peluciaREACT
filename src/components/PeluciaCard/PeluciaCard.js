import styles from "./PeluciaCard.module.css";

function PeluciaCard({ name, price, imageUrl, size, measure }) {
  return (
    <div className={styles.container}>
      <div className={styles.box} >
        <img src={imageUrl} alt="pelucia" />
        <a className={styles.name}>{name} - <span>{size}  {measure} </span></a>
        <p className={styles.price}>R$ {price} </p>
      </div>
    </div>
  );
}

export default PeluciaCard;
