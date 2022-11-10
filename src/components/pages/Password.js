import { useEffect } from "react";

import NavbarDashboard from '../layout/NavbarDashboard'

import styles from './Password.module.css'

import useDashboard from '../../hooks/useDashboard'

export default function Password() {

	const {setMyAccount, setSelectedChangePassword} = useDashboard()



	return (
		<div className={styles.container}>
		<div className={styles.navbarDashboard}>
			<NavbarDashboard />
		</div>

		<div className={styles.pages}>
			<h1> Trocar senha </h1>
		</div>

	</div>
	)
}
