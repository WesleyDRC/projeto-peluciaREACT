import ChangeImage from "../layout/ChangeImage";
import PeluciaCard from "../PeluciaCard/PeluciaCard";
import api from "../../services/api";
import { useEffect, useState } from "react";

import styles from "./Home.module.css";

function Home() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getPlush = async () => {
      const response = await api.get("/products");

      setCard(response.data);
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
        </div>
      </div>
    </>
  );
}

export default Home;

// fetch("https://9qz2iwilyc.execute-api.sa-east-1.amazonaws.com/dev/products", {
//             method: "GET",
//           })
//             .then((response) => response.json())
//             .then((data) => {
//               setCard(data);
//             })
//             .catch((error) => console.log(error));
