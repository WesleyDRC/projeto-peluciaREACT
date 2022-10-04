import styles from './AddressDetails.module.css'

export default function AddressDetails({firstText, secondText, firstEntryType, secondEntryType}) {
	return (
		<div className={styles.addressDetails}>
			<div className={styles.values}>
				<p> {firstText} <span> * </span>  <input type={firstEntryType} required /> </p>
			</div>
			<div className={styles.values}>
				<p> {secondText} <span> * </span> <input type={secondEntryType} required/> </p>
			</div>
	</div>
	)
}
