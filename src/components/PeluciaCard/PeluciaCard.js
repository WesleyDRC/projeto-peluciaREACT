import styles from "./PeluciaCard.module.css";

function PeluciaCard({ name, price, imageUrl, size, measure }) {
  return (
    <a href="#" >
      <div className={styles.container}>
        <div className={styles.box} >
          <img src={imageUrl} alt="pelucia" />
          <h4 className={styles.name}>{name} - <span>{size}  {measure} </span></h4>
          <p className={styles.price}>R$ {price} </p>
        </div>
      </div>
    </a>
    
  );
}

export default PeluciaCard;
