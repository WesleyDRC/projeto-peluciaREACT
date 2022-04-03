import ChangeImage from "../layout/ChangeImage";
import PeluciaCard from "../PeluciaCard/PeluciaCard";
import api from "../../services/api";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Loading from "../layout/Loading";

function Home() {
  const [card, setCard] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  useEffect(() => {

      const getPlush = async () => {
        const response = await api.get("/products");
        setCard(response.data);
        setRemoveLoading(true);
      };
      getPlush();

  }, []);

  return (
    <>
      <ChangeImage />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2> NOVAS PELÚCIAS </h2>
        </div>
        <div className={styles.box}>
          {card.length > 0 &&
            card.map((card) => (
              <PeluciaCard
                name={card.name}
                price={card.price}
                imageUrl={card.imageUrl}
                size={card.size}
                measure={card.measure}
              />
            ))}
          {!removeLoading && <Loading />}
          {removeLoading && card.length === 0 && (
            <p> Não há novas pelucias. </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
