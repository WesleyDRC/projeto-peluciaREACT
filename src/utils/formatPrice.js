export default function priceBRL(value) {
	return value.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	})
}
