import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const BuyContext = createContext({});

export const BuyProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [messageWarning, setMessageWarning] = useState('');
  const [activity, setActivity] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [valueFrete, setValueFrete] = useState(0);
  const [total, setTotal] = useState(0);
  const [methodShipping, setMethodShipping] = useState("");

  const [dataCEP, setDataCEP] = useState([]);
  const [loadingDataCep, setLoadingDataCep] = useState(false);
  const [loadingDataFrete, setLoadingDataFrete] = useState(false);
  const [dataFrete, setDataFrete] = useState([]);

  const availableProducts = 10;

  useEffect(() => {
    const listCart = localStorage.getItem("list_cart");

    if(listCart){
      setCart(JSON.parse(listCart))
    }
  }, [])

  useEffect(() => {
    if(methodShipping === "methodShipping04510"){
      priceTotalOrder(subTotalProducts, dataFrete[0].Valor)
    }
    if(methodShipping === "methodShipping04014"){
      priceTotalOrder(subTotalProducts, dataFrete[1].Valor)
    }
    if(methodShipping === "methodPickUpInStore"){
      priceTotalOrder(subTotalProducts, 0)
    }
  }, [methodShipping, dataFrete])

  let subTotalProducts = selectedItem.price * selectedItem.quantity;
  function priceTotalOrder(subTotal, valueFrete ) {
    setValueFrete(valueFrete)
    setTotal(subTotal + parseFloat(valueFrete))
  }

  function visibleToast() {
    setActivity(true)
      setTimeout(function () {
        setActivity(false)
      }, 3000)
  }

  async function handleAddItemToCard(id, name, price, imageUrl, size, measure, quantity) {
    try {
      const itemModelObject = await {
        id,
        name,
        price,
        imageUrl,
        size,
        measure,
        quantity
      }
      const item = cart.find((product) => product.id === id);
      if(!item) {
        setCart([...cart, itemModelObject])
        localStorage.setItem("list_cart", JSON.stringify([...cart, itemModelObject]));
        setErrorMessage(false)
        setMessageWarning("Produto adicionado com sucesso ao carrinho!");
        visibleToast()
        return
      }

      if((item.quantity + quantity) > availableProducts) {
        setErrorMessage(true)
        setMessageWarning("Não é possível adicionar essa quantidade ao carrinho!");
        visibleToast()
        return;
      }
      if(item.quantity < availableProducts) {
        const quantityItem = item.quantity + quantity
        item.quantity = quantityItem
        setErrorMessage(false)
        setMessageWarning("Produto adicionado com sucesso ao carrinho!");
        visibleToast()
        return
      } else{
        setErrorMessage(true)
        setMessageWarning("Quantidade solicitada fora de estoque");
        visibleToast()
        return
      }
    } catch(error){
      console.log(error)
    }
  }

  function handleBuyItem(id, name, price, size, measure, quantity) {
    const itemModelObject = {
      id,
      name,
      price,
      size,
      measure,
      quantity
    }
    setSelectedItem(itemModelObject)
  }

  async function updateProductAmount ({id, quantity}) {
    try {
      if (quantity <= 0) {
        setMessageWarning('Erro na alteração de quantidade do produto');
        setErrorMessage(true)
        visibleToast()
        return;
      }
      if(quantity > availableProducts){
        setMessageWarning("Quantidade solicitada fora de estoque");
        setErrorMessage(true)
        visibleToast()
        return;
      }

      const newCart = cart.map((item) => item.id === id ? ({
        ...item, quantity
      }): item)

      localStorage.setItem("list_cart", JSON.stringify(newCart));
      setCart(newCart)

    } catch (error) {
      console.log(error)
    }
  }

  async function handleRemoveItemFromCart(id) {
    let filteredCart = await cart.filter(function(idProduct) { return idProduct.id !== id; });
    localStorage.setItem("list_cart", JSON.stringify(filteredCart));
    setCart(filteredCart)
  }

  async function selectedItemToBuy(id) {
    const item = cart.find((product) => product.id === id);
    setSelectedItem(item)
    return item
  }

  function handleRemoveAll() {
    setCart([])
    localStorage.removeItem("list_cart")
  }

  async function searchCEP(valueCep) {
    try {
      const numberCep = parseInt(valueCep.replace(/\D/g, ""));
      if (numberCep !== "") {
        var validateCep = /^[0-9]{8}$/;
        if (validateCep.test(numberCep)) {
          await axios
            .post(`${process.env.REACT_APP_CORREIOS}/cep`, { valueCep: numberCep })
            .then(
              (response) => {
                setLoadingDataCep(true)
                setTimeout(() => {
                  setLoadingDataCep(false);
                }, 1000)
                setDataCEP(response.data);
              },
              (error) => {
                console.log(error);
              }
            );
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function frete(
    sCepOrigem,
    sCepDestino,
    nVlPeso,
    nCdFormato,
    nVlComprimento,
    nVlAltura,
    nVlLargura,
    nCdServico,
    nVlDiametro
  ) {
    try {
      await axios
        .post(`${process.env.REACT_APP_CORREIOS}/calcularFrete`, {
          sCepOrigem,
          sCepDestino,
          nVlPeso,
          nCdFormato,
          nVlComprimento,
          nVlAltura,
          nVlLargura,
          nCdServico,
          nVlDiametro,
        })
        .then(
          (response) => {
            setLoadingDataFrete(true);
            setTimeout(() => {
              setLoadingDataFrete(false);
            }, 1000)
            setDataFrete(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }


  let optionShipping = document.getElementsByName("optionShipping");


  function shippingOption() {
    if(dataFrete.length === 0) {
      setMessageWarning('Por favor, insira o seu CEP!')
      visibleToast()
      for(var index of optionShipping) {
        index.checked = false;
      }
    }
      setMethodShipping(document.querySelector('input[name="optionShipping"]:checked').value)
  }

  function finalizingOrder() {
    if (methodShipping === "") {
      setMessageWarning("Por favor, selecione um método de envio!");
      visibleToast();
    } else {
      setCheckout(true);
    }
  }

	return (
    <BuyContext.Provider
      value={{ cart, handleAddItemToCard, handleRemoveItemFromCart, handleRemoveAll, availableProducts, updateProductAmount, visibleToast, activity, messageWarning, errorMessage, selectedItemToBuy, selectedItem, total, priceTotalOrder, subTotalProducts, valueFrete, finalizingOrder, shippingOption, checkout, searchCEP,dataCEP, loadingDataCep, loadingDataFrete, frete, dataFrete, setSelectedItem, handleBuyItem}}
    >
      {children}
    </BuyContext.Provider>
  );
}
