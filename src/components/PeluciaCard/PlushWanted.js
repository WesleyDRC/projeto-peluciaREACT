import styles from "./PlushWanted.module.css";
import {Link} from 'react-router-dom';
function PlushWanted({ imageUrl, name, alt, id }) {
  return (
    <Link to={`/product/${id}`}>
      <div className={styles.product}>
        <img alt={alt} src={imageUrl} />
        <p> {name} </p>
      </div>
    </Link>
  );
}

export default PlushWanted;
