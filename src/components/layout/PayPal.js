import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import useBuy from "../../hooks/useBuyFlow"

export default function PayPal() {

	const {selectedItem, total} = useBuy()

	const navigate = useNavigate()
	const paypal = useRef()

	useEffect(() => {
		window.paypal.Buttons({
			createOrder: (data, actions, err) => {
				return actions.order.create({
					intent: "CAPTURE",
					purchase_units: [
						{
							description: selectedItem.name,
							amount: {
								currency_code: "BRL",
								value: total
							}
						}
					]
				})
			},
			onApprove: async (data, actions) => {
				const order = await actions.order.capture();
				navigate('/ordersuccess')
			},
			onError: (err) => {
				console.log(err)
			}
		}).render(paypal.current)
	}, [])
	return (
		<div>
			<div ref={paypal}></div>
		</div>
	)
}
