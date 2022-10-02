import styles from './CartItem.module.css';

import {Link} from 'react-router-dom'

import { RiSubtractFill } from 'react-icons/ri';
import { IoAddOutline } from 'react-icons/io5';

import useBuy from '../../hooks/useBuyFlow';

export default function CartItem({id, name, price, imageUrl, size, measure, quantity, handleProductDecrement,handleProductIncrement }) {

	const { handleRemoveItemFromCart, availableProducts} = useBuy()

	return (
		<li className={styles.cartItem} key={id}>

			<div className={styles.product}>
				<Link to={`/product/${id}`}>
					<div className={styles.imageProduct}> <img src={imageUrl} alt="Produto"/> </div>
					<p> {name} - {size} {measure} </p>
				</Link>
			</div>

			<div className={styles.quantity}>
				<div className={styles.quantityWantBuy}>
						<button
							className={styles.decrease}
							onClick={handleProductDecrement}
						>
							<RiSubtractFill />
						</button>
						{quantity}
						<button
							className={styles.add}
							onClick={handleProductIncrement}
						>
							<IoAddOutline />
						</button>
					</div>
					<div className={styles.availableQuantity}>
            <p>{availableProducts} produtos disponíveis</p>
          </div>
			</div>
			<div className={styles.price}>
				<p> {price} </p>
			</div>
			<div className={styles.action}>
				<button
					className={styles.delete}
					onClick={() => handleRemoveItemFromCart (id)}
				>
					Apagar
				</button>
				<button className={styles.buy}> Comprar </button>
			</div>
		</li>
	)
}
