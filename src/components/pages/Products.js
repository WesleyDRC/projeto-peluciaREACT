import styles from "./Products.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import PeluciaCard from "../PeluciaCard/PeluciaCard";
import Loading from "../layout/Loading";

function Products() {
  const [card, setCard] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const getPlush = async () => {
        try {
          const response = await api.get("/products");
          setCard(response.data);
          setRemoveLoading(true);
        } catch (error) {
          console.log(error);
        }
      };
      getPlush();
    }, 1000);
  }, []);

  let { filtro } = useParams();

  const lowerText = filtro.toLowerCase();
  const filtrar = card.filter(({ name }) => {
    return name.toLowerCase().includes(lowerText);
  });

  return (
    <div className={styles.container}>
      <ul className={styles.container_list}>
        {card.length > 0 &&
          filtrar.map((card) => {
            return (
              <li key={card.id}>
                <PeluciaCard
                  name={card.name}
                  price={card.price}
                  imageUrl={card.imageUrl}
                  size={card.size}
                  measure={card.measure}
                />
              </li>
            );
          })}
      </ul>
      {!removeLoading && <Loading />}
      {removeLoading && card.length === 0 && <p> Não há novas pelucias. </p>}
    </div>
  );
}

export default Products;
