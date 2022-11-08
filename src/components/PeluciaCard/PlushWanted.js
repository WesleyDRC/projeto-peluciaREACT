import styles from "./PlushWanted.module.css";
import {Link} from 'react-router-dom';
function PlushWanted({ imageUrl, name, alt }) {
  return (
    <Link to="/">
      <div className={styles.product}>
        <img alt={alt} src={imageUrl} />
        <p> {name} </p>
      </div>
    </Link>
  );
}

export default PlushWanted;
