import styles from "./Products.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import PeluciaCard from "../PeluciaCard/PeluciaCard";

function Products() {
  //   const [filter, setFilter] = useState("");
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getPlush = async () => {
      try {
        const response = await api.get("/products");
        setCard(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPlush();
  }, []);

  let { filtro } = useParams();

  const lowerText = filtro.toLowerCase();
  const filtrar = card.filter(({ name }) => {
    return name.toLowerCase().includes(lowerText);
  });

  return (
    <div className={styles.container}>
      <ul class={styles.container_list}>
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
    </div>
  );
}

export default Products;
