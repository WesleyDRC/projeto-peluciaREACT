import { useEffect } from "react";

import NavbarDashboard from '../layout/NavbarDashboard'
import styles from './Address.module.css'

import useDashboard from '../../hooks/useDashboard'

export default function Address() {

  const {setMyAccount, setSelectedProfileAddress} = useDashboard()

	return (
		<div className={styles.container}>
        <div className={styles.navbarDashboard}>
          <NavbarDashboard />
        </div>

        <div className={styles.pages}>
					<h1> Meus endereços</h1>
        </div>

      </div>
	)
}
