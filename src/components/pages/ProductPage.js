import ProductInformation from "../layout/ProductInformation";
import Loading from '../layout/Loading'

import AxiosRepository from '../../repository/AxiosRepository'
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

export default function ProductPage() {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel = false;
    AxiosRepository.findAll().then((resp) => {
      if (cancel) return;
      setProduct(resp.data)
      setLoading(false)
    })

    return () => {
      cancel = true;
    }
  }, []);

  let { id } = useParams();

  const lowerText = id.toLowerCase();
  const filtrar = product.filter(({ id }) =>
    id.toLowerCase().includes(lowerText)
  );

  return (
    <>
      {product.length > 0 &&
        filtrar.map((plush) => (
          <ProductInformation
            key={plush.id}
            imageUrl={plush.imageUrl}
            name={plush.name}
            size={plush.size}
            measure={plush.measure}
            price={plush.price}
            id={plush.id}
          />
        ))}
      {loading && <Loading />}
    </>
  );
}
