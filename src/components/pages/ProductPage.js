import ProductInformation from "../layout/ProductInformation";

import AxiosRepository from '../../repository/AxiosRepository'
import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

export default function ProductPage() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    try {
      AxiosRepository.findAll().then((resp) => setProduct(resp.data));
    } catch (error) {
      console.log(error);
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
    </>
  );
}
