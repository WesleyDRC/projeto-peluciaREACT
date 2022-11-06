import { createContext, useState, useEffect } from "react";

export const BuyContext = createContext({});

export const BuyProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [messageWarning, setMessageWarning] = useState('');
  const [activity, setActivity] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [valueFrete, setValueFrete] = useState(0);
  const [total, setTotal] = useState(0);
  const availableProducts = 10;



  useEffect(() => {
    const listCart = localStorage.getItem("list_cart");

    if(listCart){
      setCart(JSON.parse(listCart))
    }
  }, [])

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

	return (
    <BuyContext.Provider
      value={{ cart, handleAddItemToCard, handleRemoveItemFromCart, handleRemoveAll, availableProducts, updateProductAmount, visibleToast, activity, messageWarning, errorMessage, selectedItemToBuy, selectedItem, total, priceTotalOrder, subTotalProducts, valueFrete}}
    >
      {children}
    </BuyContext.Provider>
  );
}
