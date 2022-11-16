// 1° CLIQUEI NO ADICIONAR CARRINHO, PEGAR O ITEM QUE QUERO ADICIONAR NO CARRINHO E A QUANTIDADE
import { useContext } from "react";
import { BuyContext } from "../contexts/buyFlow";

const useBuy = () => {
  return useContext(BuyContext);
};

export default useBuy;
