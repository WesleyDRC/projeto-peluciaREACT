
import styles from './CartPage.module.css';

import { IoMdCart } from 'react-icons/io';
import { RiHandbagFill } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs'

import {Link} from 'react-router-dom';

import useBuy from '../../hooks/useBuyFlow';

import CartItem from '../layout/CartItem';
import Warning from '../layout/Warning';

import { useNavigate } from "react-router-dom";

export default function CartPage () {

	const {cart, handleRemoveAll, updateProductAmount, messageWarning, errorMessage} = useBuy()

  const navigate = useNavigate()

	function handleProductDecrement(product) {
    const { id, quantity } = product;

    updateProductAmount({ id: id, quantity: quantity - 1 });
  }

	function handleProductIncrement(product) {
    const { id, quantity } = product;

    updateProductAmount({ id: id, quantity: quantity + 1 });
  }


  function buyItem() {
    navigate('/finalize-order');
  }

	return (
		<div className={styles.cart}>
			<h1> <IoMdCart size={50} color='#404E65'/> CARRINHO DE COMPRAS  </h1>
			<div className={styles.info}>
				<div className={styles.name}>
					<p> Nome</p>
				</div>
				<div className={styles.quantity}>
				<p> Quantidade</p>
				</div>
				<div className={styles.price}>
				<p> Preço</p>
				</div>
				<div className={styles.action}>
				<p> Ação</p>
				</div>
			</div>

				{
					cart.length === 0 && (
						<div className={styles.content}>
							<div className={styles.emptyCart}>
								<RiHandbagFill size={130} color="#404E65" />
								<p> Seu carrinho de compras está vazio </p>
								<Link to="/"> Ir Às Compras Agora </Link>
							</div>
						</div>
					)
				}
				<div className={styles.listCart}>
				{
					cart.map( (cartItem) =>
					<CartItem
						key={cartItem.id}
						id={cartItem.id}
						name={cartItem.name}
						price={(cartItem.price * cartItem.quantity).toLocaleString("pt-br", {
							style: "currency",
							currency: "BRL",
						})}
						imageUrl={cartItem.imageUrl}
						size={cartItem.size}
						measure={cartItem.measure}
						quantity={cartItem.quantity}
						handleProductDecrement={() => handleProductDecrement(cartItem)}
						handleProductIncrement={() => handleProductIncrement(cartItem)}
					/>
				)
				}
				</div>

				<div className={styles.trash}>
					<button onClick={() => handleRemoveAll()}> <BsTrash /> Apagar tudo</button>
				</div>
				<Warning message={messageWarning} error={errorMessage}/>
		</div>
	)
}
