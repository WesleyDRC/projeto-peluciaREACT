import styles from "./PlushWanted.module.css";

function PlushWanted({ imageUrl, name }) {
  return (
    <a href="#">
      <div className={styles.product}>
        <img src={imageUrl} />
        <p> {name} </p>
      </div>
    </a>
  );
}

export default PlushWanted;
