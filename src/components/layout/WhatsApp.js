import styles from "./WhatsApp.module.css";
import { BsWhatsapp } from "react-icons/bs";
function WhatsApp() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=5512988357075"
        target="_blank"
        className={styles.float}
      >
        <BsWhatsapp className={styles.my_float}/>
      </a>
    </>
  );
}

export default WhatsApp;
