import ChangeImage from "../layout/ChangeImage";
import PeluciaCard from "../PeluciaCard/PeluciaCard";
import { useState } from "react";
import styles from "./Home.module.css";
import Loading from "../layout/Loading";
import SearchInput from "../layout/SearchInput";
import { gql, useQuery } from "@apollo/client";

function Home() {
  const [text, setText] = useState("");
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


  const lowerText = text.toLowerCase();
  const filtrar = card.filter(({ name }) =>
    name.toLowerCase().includes(lowerText)
  );

  let handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <ChangeImage />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2> NOVAS PELÚCIAS </h2>
        </div>
        <div className={styles.container_input}>
          <SearchInput
            value={text}
            onChange={handleChange}
            placeholder="Procurar pelúcia..."
          />
        </div>
        <div>
          <ul className={styles.container_list}>
            {card.length > 0 &&
              filtrar.map((card) => (
                <li key={card.id}>
                  <PeluciaCard
                    name={card.name}
                    price={card.price}
                    imageUrl={card.imageUrl}
                    size={card.size}
                    measure={card.measure}
                  />
                </li>
              ))}
          </ul>
          {loading && <Loading />}
          {!loading && card.length === 0 && (
            <ul className={styles.container_list}>
              <p> Não há novas pelucias. </p>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
