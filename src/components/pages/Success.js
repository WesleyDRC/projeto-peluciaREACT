import { BsCheck2Circle } from 'react-icons/bs'
import styles from './Success.module.css'

export default function Success() {

	return (
		<div className={styles.container}>
			<h1> Pedido confirmado </h1>
			<div className={styles.order}>
				<div className={styles.warningOrder}>
					<h2> Seu pedido foi realizado com sucesso! </h2>
					<p> Em breve você recebera um e-mail no endereço "email" com todos os detalhes do pedido.</p>
				</div>
				<div className={styles.ApprovedPaymentBox}>
					<BsCheck2Circle className={styles.svg} />
					<p> Pagamento aprovado </p>
				</div>
			</div>

			<div className={styles.productInformation}>
				<h2> Informações do pedido</h2>
				<ul>
					<li>ID:</li>
					<li>Total:</li>
					<li>Forma de pagamento:</li>
					<li>Endereço de entrega:</li>
				</ul>

				*Os produtos são enviados em até 1 dia útil após aprovação do pagamento.*
			</div>
		</div>

	)
}
