import { createContext, useState, useEffect } from "react";

export const BuyContext = createContext({});

export const BuyProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const availableProducts = 10;

  useEffect(() => {
    const listCart = localStorage.getItem("list_cart");

    if(listCart){
      setCart(JSON.parse(listCart))
    }
  }, [])

  async function handleAddItemToCard(id, name, price, imageUrl, size, measure, quantity) {
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
    } else {
      item.quantity = item.quantity + quantity
    }

  }

  async function handleRemoveItemFromCart(id) {
    let filteredCart = await cart.filter(function(idProduct) { return idProduct.id !== id; });
    setCart(filteredCart)
  }

  function handleRemoveAll() {
    setCart([])
    localStorage.removeItem("list_cart")
  }

	return (
    <BuyContext.Provider
      value={{ cart, handleAddItemToCard, handleRemoveItemFromCart, handleRemoveAll, availableProducts}}
    >
      {children}
    </BuyContext.Provider>
  );
}








// const AddCart = async (idProduct) => {
// 	try {
// 		const copyProductCart = [...productCart]

// 		const item = copyProductCart.find((product) => product.id === idProduct);

// 		if (!item) {
// 			copyProductCart.push({ id: idProduct, qtd: 1 });
// 		} else {
// 			item.qtd = item.qtd + 1;
// 		}
// 		setProductCart(copyProductCart)
// 		localStorage.setItem("list_cart", JSON.stringify(productCart));
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
