import styles from './Warning.module.css'
import { AiOutlineWarning } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'

import useBuy from '../../hooks/useBuyFlow'

export default function Warning ({message, error}) {

	const {activity} = useBuy()

	return (
		<div id="warningToast" className={activity ? styles.showWarning : styles.warning}>
			<div className={error ? styles.containerError : styles.containerSucess}>
				<div className={styles.icon}>{error ? <AiOutlineWarning /> : <BsCheck2Circle />} </div>
				<strong>{message}</strong>
			</div>
		</div>
	)
}
