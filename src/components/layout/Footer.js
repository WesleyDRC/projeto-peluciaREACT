import styles from './Footer.module.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

function Footer () {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>
            <p className={styles.copyright}>
                <span> Louco por Pelúcias </span> &copy;2022
            </p>
        </footer>
    )
}

export default Footer