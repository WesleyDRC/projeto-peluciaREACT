import styles from "./FinalizeOrder.module.css";

import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineWarning } from "react-icons/ai";

import InputAddres from "../layout/InputAddres";
import Warning from "../layout/Warning";

import PayPal from "../layout/PayPal";

import useBuy from "../../hooks/useBuyFlow";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import priceBRL from "../../utils/formatPrice";

export default function FinalizeOrder() {
  const {
    subTotalProducts,
    selectedItem,
    total,
    shippingOption,
    finalizingOrder,
    checkout,
    messageWarning,
    searchCEP,
    dataCEP,
    loadingDataCep,
    loadingDataFrete,
    frete,
    dataFrete,
  } = useBuy();

  const [cep, setCEP] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    searchCEP(cep);
  }, [cep]);

  useEffect(() => {
    const objectKeysDataCEP = Object.keys(dataCEP);

    if (objectKeysDataCEP.length > 0) {
      const sCepOrigem = "12248503";
      const sCepDestino = dataCEP.cep;
      const nVlPeso = "1";
      const nCdFormato = "1";
      const nVlComprimento = "20";
      const nVlAltura = "20";
      const nVlLargura = "20";
      const nCdServico = ["04510", "04014"];
      const nVlDiametro = "0";
      frete(
        sCepOrigem,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nCdServico,
        nVlDiametro
      );
    }
  }, [dataCEP]);

  useEffect(() => {
    if (selectedItem.length === 0) {
      navigate("/cart");
    }
  }, [selectedItem, navigate]);

  function onlyNumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /^[0-9]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Finalizar Pedido </h1>

      <div className={styles.content}>
        <div className={styles.address}>
          <h2>
            <IoLocationOutline />
            Endereço De Entrega
          </h2>
          <p className={styles.warningAddres}>
            <AiOutlineWarning />O preenchimento do seu endereço será automático
            se você digitar seu CEP!
          </p>
          <div className={styles.addressDetails}>
            <InputAddres
              id="Cep"
              text="Cep"
              type="text"
              value={cep}
              onChange={(e) => setCEP(e.target.value)}
              readOnly={false}
              autoFocus={true}
              max={8}
              onKeyPress={(e) => onlyNumber(e)}
              required={true}
            />
            <InputAddres
              text="Estado"
              readOnly={true}
              value={dataCEP.state}
              required={true}
              customClass={!loadingDataCep ? "cursorBlock" : "cursorLoading"}
            />
            <InputAddres
              text="Cidade"
              readOnly={true}
              value={dataCEP.city}
              required={true}
              customClass={!loadingDataCep ? "cursorBlock" : "cursorLoading"}
            />
            <InputAddres
              text="Bairro"
              id="neigh"
              value={dataCEP.neighborhood}
              readOnly={true}
              required={true}
              customClass={!loadingDataCep ? "cursorBlock" : "cursorLoading"}
            />
            <InputAddres
              text="Rua"
              value={dataCEP.street}
              readOnly={true}
              required={true}
              customClass={!loadingDataCep ? "cursorBlock" : "cursorLoading"}
            />
            <div className={styles.numberAndComplement}>
              <InputAddres
                text="Número"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                readOnly={false}
                required={true}
              />
              <InputAddres
                text="Complemento"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                readOnly={false}
                required={false}
              />
            </div>
          </div>
        </div>

        <div className={styles.order}>
          <h1 className={styles.sectionTitle}> SEU PEDIDO </h1>
          <div className={styles.content}>
            <table className={styles.tableOrder}>
              <thead className={styles.listProducts}>
                <tr>
                  <th className={styles.productName}>PRODUTO</th>
                  <th className={styles.productTotal}>SUBTOTAL</th>
                </tr>
              </thead>

              <tbody>
                <tr className={styles.cartItem}>
                  <td className={styles.productName}>
                    {selectedItem.name} -
                    {`${selectedItem.size} ${selectedItem.measure}`}
                    <p> {selectedItem.quantity}x</p>
                  </td>
                  <td className={styles.productTotal}>
                    <span>{priceBRL(subTotalProducts)}</span>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr className={styles.subtotal}>
                  <th> Subtotal </th>
                  <td>
                    <span>{priceBRL(subTotalProducts)}</span>
                  </td>
                </tr>
                <tr className={loadingDataFrete ? styles.shippingLoading : styles.shipping}>
                  <td colSpan="2">
                    <h2 className={styles.sectionTitle}> ENTREGA </h2>
                    <ul>
                      <li>
                        <input
                          name="optionShipping"
                          value="methodShipping04510"
                          type="radio"
                          id="methodShipping04510"
                          onClick={shippingOption}
                          className={styles.inputRadio}
                        />
                        <label
                          htmlFor="methodShipping04510"
                          className={styles.labelShipping}
                        >
                          Correios PAC
                          <span className={styles.priceMethodShipping}>
                            {dataFrete.length === 0
                              ? ""
                              : priceBRL(parseFloat(dataFrete[0].Valor))}
                          </span>
                        </label>
                      </li>
                      <li>
                        <input
                          name="optionShipping"
                          value="methodShipping04014"
                          type="radio"
                          id="methodShipping04014"
                          onClick={shippingOption}
                          className={styles.inputRadio}
                        />
                        <label
                          htmlFor="methodShipping04014"
                          className={styles.labelShipping}
                        >
                          Correios SEDEX
                          <span className={styles.priceMethodShipping}>
                            {dataFrete.length === 0
                              ? ""
                              : priceBRL(parseFloat(dataFrete[1].Valor))}
                          </span>
                        </label>
                      </li>
                      <li>
                        <input
                          name="optionShipping"
                          value="methodPickUpInStore"
                          type="radio"
                          id="methodPickUpInStore"
                          onClick={shippingOption}
                          className={styles.inputRadio}
                        />
                        <label
                          htmlFor="methodPickUpInStore"
                          className={styles.labelShipping}
                        >
                          Retirar na loja
                          <span className={styles.priceMethodShipping}>
                            {priceBRL(0)}
                          </span>
                        </label>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className={styles.orderTotal}>
                  <th> Total </th>
                  <td>
                    <span>{priceBRL(total)}</span>
                  </td>
                </tr>
              </tfoot>
            </table>

            {/* <ul>
								<li>
									<input type="radio" name="paymentMethods" id="PIX" className={styles.inputRadio}/>
									<label htmlFor="PIX"> Pagar com PIX ( 3% de desconto )</label>
								</li>
								<li>
									<input type="radio" name="paymentMethods" id="ticket" className={styles.inputRadio}/>
									<label htmlFor="ticket"> Boleto ( 3% de desconto )</label>
								</li>
								<li>
									<input type="radio" name="paymentMethods" id="creditCard" className={styles.inputRadio}/>
									<label htmlFor="creditCard"> Cartão de crédito</label>
								</li>
							</ul> */}

            {checkout ? (
              <div className={styles.payment}>
                <h3> MÉTODO DE PAGAMENTO</h3>
                <PayPal />
              </div>
            ) : (
              <button
                type="submit"
                className={styles.btn}
                onClick={finalizingOrder}
              >
                Finalizar pedido
              </button>
            )}
          </div>
        </div>
      </div>
      <Warning message={messageWarning} error={true} />
    </div>
  );
}
