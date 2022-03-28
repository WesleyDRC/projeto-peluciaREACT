import styles from "./PeluciaCard.module.css";

function PeluciaCard({ name, price, imageUrl, size, measure }) {
  return (
    <div className={styles.container}>
      <div className={styles.box} >
        <img src={imageUrl} alt="pelucia" />
        <h4 className={styles.name}>{name} - {size} <span> {measure} </span></h4>
        <p className={styles.price}>R$ {price} </p>

      </div>
    </div>
  );
}

export default PeluciaCard;
