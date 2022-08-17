import ChangeImage from "../layout/ChangeImage";
import PeluciaCard from "../PeluciaCard/PeluciaCard";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Loading from "../layout/Loading";
import SearchInput from "../layout/SearchInput";
import { gql, useQuery } from "@apollo/client";

function Home() {
  const [text, setText] = useState("");
  const [product, setProduct] = useState([]);
  const [erro, setErro] = useState(false);

  const GET_PLUSH = gql`
    query {
      findAll {
        id
        name
        price
        size
        measure
        imageUrl
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PLUSH);

  useEffect(() => {
    const onCompleted = (data) => {
      setProduct(data.findAll);
    };
    const onError = (error) => {
      setErro(!error);
    };
    if (onCompleted || onError) {
      if (onCompleted && !loading && !error) {
        onCompleted(data);
      } else if (onError && !loading && error) {
        onError(error);
      }
    }
  }, [data, loading, error]);

  const lowerText = text.toLowerCase();
  const filtrar = product.filter(({ name }) =>
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
            {product.length > 0 &&
              filtrar.map((plush) => (
                <li key={plush.id}>
                  <PeluciaCard
                    name={plush.name}
                    price={plush.price}
                    imageUrl={plush.imageUrl}
                    size={plush.size}
                    measure={plush.measure}
                  />
                </li>
              ))}
          </ul>
          {loading && <Loading />}
          {!loading && product.length === 0 && <p> Não há novas pelucias. </p>}
          {erro && <p> Algo deu errado! Tente novamente. </p>}
        </div>
      </div>
    </>
  );
}

export default Home;
