import styles from "./Products.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PeluciaCard from "../PeluciaCard/PeluciaCard";
import Loading from "../layout/Loading";
import { useQuery } from "@apollo/client";
import NotFound from "./NotFound";
import graphqlRepository from "../../repository/graphqlRepository";

function Products() {
  const [product, setProduct] = useState([]);
  const [erro, setErro] = useState(false);

  const GET_PLUSH = graphqlRepository.findAll();
  const { data, loading, error } = useQuery(GET_PLUSH);

  useEffect(() => {
    try {
      if (data) setProduct(data.findAll);
    } catch (e) {
      console.log(e);
      setErro(error);
    }
  }, [data, error]);

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
                  id={plush.id}
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
      {filtro.length > 0 && filtrar.length === 0 && <NotFound value={filtro} />}
    </div>
  );
}

export default Products;
