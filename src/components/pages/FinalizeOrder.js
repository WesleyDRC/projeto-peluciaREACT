import styles from './FinalizeOrder.module.css'

import { IoLocationOutline } from 'react-icons/io5';

import AddressDetails from '../layout/AddressDetails';

import useBuy from '../../hooks/useBuyFlow';

export default function FinalizeOrder() {

	const {selectedItem} = useBuy()

	console.log(selectedItem)

	return (
		<div className={styles.container}>
			<h1 className={styles.title}> Finalizar Pedido </h1>

			<div className={styles.content}>
				<div className={styles.address}>
					<h2> <IoLocationOutline />Endereço De Entrega </h2>
						<AddressDetails firstText="Rua"secondText="Número" firstEntryType="text" />
						<AddressDetails firstText="Bairro"secondText="Cidade" firstEntryType="text" />
						<AddressDetails firstText="Estado"secondText="Cep" firstEntryType="text" />
				</div>

				<div className={styles.order}>
					<h1 className={styles.sectionTitle}> SEU PEDIDO </h1>
					<div className={styles.content}>
						<table className={styles.tableOrder}>

							<thead className={styles.listProducts}>
								<tr>
									<th className={styles.productName}>
										PRODUTO
									</th>
									<th className={styles.productTotal}>
										SUBTOTAL
									</th>
								</tr>
							</thead>

							<tbody>
								<tr className={styles.cartItem}>
									<td className={styles.productName}>
										{selectedItem.name} - {`${selectedItem.size} ${selectedItem.measure}`}
										<p> {selectedItem.quantity}x</p>
									</td>
									<td className={styles.productTotal}>
										<span> {(selectedItem.price * selectedItem.quantity).toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
												})}
										</span>
									</td>
								</tr>
							</tbody>

							<tfoot>
								<tr className={styles.subtotal}>
									<th> Subtotal </th>
									<td>
										<span> {(selectedItem.price * selectedItem.quantity).toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
												})}
										</span>
									</td>
								</tr>
								<tr className={styles.shipping}>
									<td colspan="2">
										<h2 className={styles.sectionTitle}> ENTREGA </h2>
										<ul>
											<li>
												<input name="optionShipping" value="method1"type="radio" id="method1"  className={styles.inputRadio}/>
												<label for="method1" className={styles.labelShipping}> Correios <span className={styles.priceMethodShipping}>R$ 20,90 </span> </label>
											</li>
											<li>
												<input name="optionShipping" value="method2" type="radio" id="method2" className={styles.inputRadio}/>
												<label for="method2" className={styles.labelShipping}> Correios <span className={styles.priceMethodShipping}>R$ 20,90 </span> </label>
											</li>
											<li>
												<input name="optionShipping" value="method3" type="radio" id="method3" className={styles.inputRadio}/>
												<label for="method3" className={styles.labelShipping}> Correios <span className={styles.priceMethodShipping}>R$ 20,90 </span> </label>
											</li>
											<li>
												<input name="optionShipping" value="method4" type="radio" id="method4" className={styles.inputRadio}/>
												<label for="method4" className={styles.labelShipping}> Retirar na loja <span className={styles.priceMethodShipping}>R$ 20,90 </span> </label>
											</li>
										</ul>
									</td>
								</tr>
								<tr className={styles.discount}>
									<th> Desconto pagando com PIX </th>
									<td> <span> R$ -20,70</span> </td>
								</tr>
								<tr className={styles.orderTotal}>
									<th> Total </th>
									<td> <span>R$ -20,70 </span> </td>
								</tr>
							</tfoot>
						</table>

						<div className={styles.payment}>
							<h3> MÉTODO DE PAGAMENTO</h3>
							<ul>
								<li>
									<input type="radio" name="paymentMethods" id="PIX" className={styles.inputRadio}/>
									<label for="PIX"> Pagar com PIX (10% de desconto)</label>
								</li>
								<li>
									<input type="radio" name="paymentMethods" id="ticket" className={styles.inputRadio}/>
									<label for="ticket"> Boleto (10% de desconto)</label>
								</li>
								<li>
									<input type="radio" name="paymentMethods" id="creditCard" className={styles.inputRadio}/>
									<label for="creditCard"> Cartão de crédito</label>
								</li>
							</ul>

							<button type="submit" className={styles.btn}> Finalizar pedido</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
