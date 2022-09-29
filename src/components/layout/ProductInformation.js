import { useState } from "react";

import styles from "./ProductInformation.module.css";

import { RiSubtractFill } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { IoMdCart } from 'react-icons/io';

import useBuy from "../../hooks/useBuyFlow";

export default function ProductInformation({
  imageUrl,
  name,
  size,
  measure,
  price,
  id
}) {
  const desconto = price * (3 / 100);
  const newPrice = (price - desconto).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const [quantity, setQuantity] = useState(0);

  const {handleAddItemToCard, availableProducts} = useBuy();

  return (
    <main>
      <div className={styles.product}>
        <section className={styles.productImage}>
          <div>
            <img src={imageUrl} alt="produto" />
          </div>
        </section>

        <section className={styles.productInfo}>
          <h1 className={styles.title}>
            {name} - {size + measure}
          </h1>
          <div className={styles.prices}>
            <p className={styles.price}>
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className={styles.discount}>
              Ou <span>{newPrice}</span> no PIX ou Boleto
            </p>
          </div>
          <form className={styles.cart} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.quantity}>
              <div className={styles.quantityWantBuy}>
              <button
                className={styles.decrease}
                onClick={() =>
                  quantity > 1
                    ? setQuantity(quantity - 1)
                    : setQuantity(quantity)
                }
              >
                <RiSubtractFill />
              </button>
              <input
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                title="Qtd"
                inputMode="numeric"
                type="number"
                step="1"
                min="1"
                max={availableProducts}
              />
              <button
                className={styles.add}
                onClick={() =>
                  quantity < availableProducts
                    ? setQuantity(quantity + 1)
                    : setQuantity(quantity)
                }
              >
                <IoAddOutline />
              </button>

              </div>
              <div className={styles.availableQuantity}>
                <p>{availableProducts} produtos disponíveis</p>
              </div>
            </div>

            <div className={styles.addToCartOrBuy}>
              <div className={styles.buy}>
                <button type="submit">Comprar</button>
              </div>

              <div className={styles.addCart}>
                <button onClick={() => quantity > 0 && handleAddItemToCard(id, name, price, imageUrl, size, measure, quantity)}> <IoMdCart /> Adicionar ao carrinho</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
