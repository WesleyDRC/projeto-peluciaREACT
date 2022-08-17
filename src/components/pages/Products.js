import styles from "./Products.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PeluciaCard from "../PeluciaCard/PeluciaCard";
import Loading from "../layout/Loading";
import { gql, useQuery } from "@apollo/client";
import NotFound from "./NotFound";

function Products() {
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

  let { filtro } = useParams();
  const lowerText = filtro.toLowerCase();
  const filtrar = product.filter(({ name }) => {
    return name.toLowerCase().includes(lowerText);
  });

  return (
    <div className={styles.container}>
      <ul className={styles.container_list}>
        {product.length > 0 &&
          filtrar.map((plush) => {
            return (
              <li key={plush.id}>
                <PeluciaCard
                  name={plush.name}
                  price={plush.price}
                  imageUrl={plush.imageUrl}
                  size={plush.size}
                  measure={plush.measure}
                />
              </li>
            );
          })}
      </ul>
      {loading && <Loading />}
      {!loading && product.length === 0 && <p> Não há novas pelucias. </p>}
      {erro && <p> Algo deu errado! Tente novamente. </p>}
      {filtro.length > 0 && filtrar.length === 0  && <NotFound value={filtro}/>}
    </div>
  );
}

export default Products;
