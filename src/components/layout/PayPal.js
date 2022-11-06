import { useEffect, useRef } from "react"

import useBuy from "../../hooks/useBuyFlow"

export default function PayPal() {

	const {selectedItem, total} = useBuy()
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
				console.log(order)
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
