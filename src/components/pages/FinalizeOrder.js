import styles from './FinalizeOrder.module.css'

import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineWarning } from 'react-icons/ai'

import InputAddres from '../layout/InputAddres';
import Loading from '../layout/Loading'
import Warning from '../layout/Warning'

import useBuy from '../../hooks/useBuyFlow';

import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

import axios from 'axios'

export default function FinalizeOrder() {

	const {selectedItem, visibleToast} = useBuy()

	const [cep, setCEP] = useState('')

	const [number, setNumber] = useState('')
	const [complement, setComplement] = useState('')
	const [dataCEP, setDataCEP] = useState([])
	const [loadingDataCep, setLoadingDataCep] = useState(true);
	const [dataFrete, setDataFrete] = useState([])
	const [loadingDataFrete, setLoadingDataFrete] = useState(true);
	const [valueFrete, setValueFrete] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate()

	useEffect( () => {
		async function searchCEP(valueCep) {
			try {
				const numberCep = parseInt(valueCep.replace(/\D/g, ''));
				if( numberCep !== '') {
					var validateCep = /^[0-9]{8}$/;
					if(validateCep.test(numberCep)) {
						const response = await axios.post( 'http://localhost:3333/cep', {valueCep: numberCep})
						setDataCEP(response.data)
						setLoadingDataCep(false)
						return
					}
				}
			} catch(error) {
				console.log(error.data)
			}
		};
		searchCEP(cep)
	}, [cep])

	useEffect(() => {
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
		)
		{
			try {
				const response = await axios.post('http://localhost:3333/calcularFrete', {
					sCepOrigem,
					sCepDestino,
					nVlPeso,
					nCdFormato,
					nVlComprimento,
					nVlAltura,
					nVlLargura,
					nCdServico,
					nVlDiametro
				})
				setDataFrete(response.data)
				setLoadingDataFrete(false)
			} catch (error) {
				console.log(error)
			}
		}
		if(Object.keys(dataCEP).length > 0){
			const sCepOrigem = "12248503"
			const sCepDestino = (dataCEP.cep).toString()
			const nVlPeso = "1"
			const nCdFormato = "1"
			const nVlComprimento = "20"
			const nVlAltura = "20"
			const nVlLargura = "20"
			const nCdServico = ["04510", "04014"]
			const nVlDiametro = "0"
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
			)
		}
	}, [dataCEP])

	if(selectedItem.length === 0){
		navigate('/cart')
	}

	let freteOpcao = '';
	let options = document.getElementsByName('optionShipping')
	console.log(options)
	function shippingOption () {
		if(dataFrete.length === 0) {
			setError('Por favor, insira o seu CEP!')
			visibleToast()
			return;
		}
		function shippingOptionSelected (){
			for(var index of options){
				if(index.checked){
					freteOpcao = index.value
				}
				if(freteOpcao === "methodShipping04510"){
					setValueFrete(dataFrete[0].Valor)
				}
				if(freteOpcao === "methodShipping04014"){
					setValueFrete(dataFrete[1].Valor)
				}
				if(freteOpcao === "methodPickUpInStore" && dataFrete.length === 0 ){
					setValueFrete ('0')
				}
			}
		}
		shippingOptionSelected()
	}

	function onlyNumber(evt) {
		var theEvent = evt || window.event;
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode( key );
		var regex = /^[0-9]+$/;
		if( !regex.test(key) ) {
				theEvent.returnValue = false;
				if(theEvent.preventDefault) theEvent.preventDefault();
		}
	}

	let subTotalProducts = selectedItem.price * selectedItem.quantity
	let total = 0;

	if(valueFrete.length > 0) {
		total = subTotalProducts + parseFloat(valueFrete);
	}

	let desconto = total - (total * (3/100))

	return (
		<div className={styles.container}>
			<h1 className={styles.title}> Finalizar Pedido </h1>

			<div className={styles.content}>
				<div className={styles.address}>
					<h2> <IoLocationOutline />Endereço De Entrega </h2>
					<p className={styles.warningAddres}> <AiOutlineWarning />O preenchimento do seu endereço será automático se você digitar seu CEP!</p>
						<div className={styles.addressDetails}>
							<InputAddres
								id="Cep"
								text="Cep"
								type='text'
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
							/>
							<InputAddres
								text="Cidade"
								readOnly={true}
								value={dataCEP.city}
								required={true}
							/>
							<InputAddres
								text="Bairro"
								id="neigh"
								value={dataCEP.neighborhood}
								readOnly={true}
								required={true}
							/>
							<InputAddres
								text="Rua"
								value={dataCEP.street}
								readOnly={true}
								required={true}
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
						<div>
								{loadingDataCep && <Loading />}
						</div>
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
										<span> {subTotalProducts.toLocaleString("pt-br", {
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
									<td colSpan="2">
										<h2 className={styles.sectionTitle}> ENTREGA </h2>
										<ul>
											<li>
												<input name="optionShipping" value="methodShipping04510" type="radio" id="methodShipping04510" onClick={shippingOption} className={styles.inputRadio}/>
												<label htmlFor="methodShipping04510" className={styles.labelShipping}> Correios PAC
													<span className={styles.priceMethodShipping}>
														{dataFrete.length === 0 ? '' : parseInt(dataFrete[0].Valor).toLocaleString("pt-br", {
														style: "currency",
														currency: "BRL",
															})}
													</span>
												</label>
											</li>
											<li>
												<input name="optionShipping" value="methodShipping04014" type="radio" id="methodShipping04014" onClick={shippingOption} className={styles.inputRadio}/>
												<label htmlFor="methodShipping04014" className={styles.labelShipping}> Correios SEDEX
												<span className={styles.priceMethodShipping}>
												{dataFrete.length === 0 ? '' : parseInt(dataFrete[1].Valor).toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
												})}
												</span> </label>
											</li>
											<li>
												<input name="optionShipping" value="methodPickUpInStore" type="radio" id="methodPickUpInStore" onClick={shippingOption} className={styles.inputRadio}/>
												<label htmlFor="methodPickUpInStore" className={styles.labelShipping}> Retirar na loja <span className={styles.priceMethodShipping}>R$ 00,00 </span> </label>
											</li>
											<div>
													{loadingDataFrete && <Loading />}
											</div>
										</ul>
									</td>
								</tr>
								<tr className={styles.discount}>
									<th> Desconto pagando com PIX </th>
									<td> <span> { desconto.toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
												})}</span> </td>
								</tr>
								<tr className={styles.orderTotal}>
									<th> Total </th>
									<td> <span>{total.toLocaleString("pt-br", {
											style: "currency",
											currency: "BRL",
												})}</span> </td>
								</tr>
							</tfoot>
						</table>

						<div className={styles.payment}>
							<h3> MÉTODO DE PAGAMENTO</h3>
							<ul>
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
							</ul>

							<button type="submit" className={styles.btn}> Finalizar pedido</button>
						</div>
					</div>
				</div>
			</div>
			<Warning message={error} error={true} />
		</div>

	)
}
