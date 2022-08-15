import styles from "./Products.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import PeluciaCard from "../PeluciaCard/PeluciaCard";
import Loading from "../layout/Loading";
import { gql, useQuery } from "@apollo/client";

function Products() {
  const [card, setCard] = useState([]);
  const GET_PLUSH = gql`
    query {
      findAll {
        name
        price
        size
        measure
        imageUrl
      }
    }
  `;

  const { loading, data } = useQuery(GET_PLUSH);

  const getPlush = async () => {
    try {
      const response = await data.findAll;
      setCard(response);
    } catch (error) {
      console.log(error);
    }
  };
  getPlush();

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
      {loading && <Loading />}
      {!loading && card.length === 0 && <p> Não há novas pelucias. </p>}
    </div>
  );
}

export default Products;
