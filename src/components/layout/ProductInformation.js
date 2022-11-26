import { useState } from "react";

import styles from "./ProductInformation.module.css";

import { RiSubtractFill } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

import useBuy from "../../hooks/useBuyFlow";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";

import Warning from "./Warning";

import priceBRL from "../../utils/formatPrice";

export default function ProductInformation({
  imageUrl,
  name,
  size,
  measure,
  price,
  id,
}) {
  const desconto = price * (3 / 100);
  const newPrice = priceBRL(price - desconto);

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const { signed } = useAuth();

  const {
    handleAddItemToCard,
    availableProducts,
    messageWarning,
    errorMessage,
    handleBuyItem,
  } = useBuy();

  async function handleSubmit() {
    if(quantity > 0) handleBuyItem(id, name, price, size, measure, quantity);
		signed ?
		navigate('/finalize-order')
		: navigate('/my-account')
  }

  return (
    <main>
      <div className={styles.product}>
        <section className={styles.productImage}>
          <div>
            <img src={imageUrl} alt={name} />
          </div>
        </section>

        <section className={styles.sectionInfo}>
          <div className={styles.productInfo}>
            <div className={styles.title}>
              <h1>
                {name} - {size + measure}
              </h1>
            </div>

            <div className={styles.prices}>
              <p className={styles.price}>{priceBRL(price)}</p>
              <p className={styles.discount}>
                Ou <span>{newPrice}</span> no PIX ou Boleto
              </p>
            </div>

            <form className={styles.cart} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.quantity}>
                <div className={styles.quantityWantBuy}>
                  <button
                    className={styles.decrease}
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    <RiSubtractFill />
                  </button>
                  <input
                    disabled
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
                      quantity < availableProducts && setQuantity(quantity + 1)
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
                  <button onClick={handleSubmit} type="button">
                    Comprar
                  </button>
                </div>

                <div className={styles.addCart}>
                  <button
                    onClick={() =>
                      quantity > 0 &&
                      handleAddItemToCard(
                        id,
                        name,
                        price,
                        imageUrl,
                        size,
                        measure,
                        quantity
                      )
                    }
                  >
                    <IoMdCart /> Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Warning message={messageWarning} error={errorMessage} />
    </main>
  );
}
